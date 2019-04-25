// @flow
import moment from 'moment'
import getWorkShiftInHours from './getWorkShiftInHours'
import getWorkShiftEveningHours from './getWorkShiftEveningHours'
import getDayWage from './getDayWage'
import {type MonthlyWages} from '../types'

/**
 * Arrange raw JSON array into a format that is easier to iterate in frontend code.
 *
 * @param {*} data Raw JSON array from CSV:s
 */
const calculateMonthlyWages = async (data: any): Promise<MonthlyWages> => {
  const monthlyWages = data.reduce((acc, currentItem) => {

    const userId = parseInt(currentItem['Person ID'])
    const date = moment(currentItem['Date'], 'DD.MM.YYYY')

    if (!date || !userId) {
      return acc
    }

    const month = date.month()
    const year = date.year()

    let monthObject = acc.find(e => (e.month === month && e.year === year))

    if (!monthObject) {
      monthObject = {
        month,
        year,
        workers: [],
      }

      acc.push(monthObject)
    }

    let worker = monthObject.workers.find(e => e.id === userId)

    if (!worker) {
      worker = {
        id: userId,
        fullname: currentItem['Person Name'],
        days: [],
      }

      monthObject.workers.push(worker)
    }

    let day = worker.days.find(e => e.date === currentItem['Date'])

    if (!day) {
      day = {
        date: currentItem['Date'],
        wage: 0,
        hours: 0,
        eveningHours: 0,
        overtimeHours: 0,
        shifts: [],
      }

      worker.days.push(day)
    }

    day.shifts.push({start: currentItem['Start'], end: currentItem['End']})

    const startTime = moment(`${currentItem['Date']} ${currentItem['Start']}`, 'DD.MM.YYYY HH:mm:ss')
    const endTime = moment(`${currentItem['Date']} ${currentItem['End']}`, 'DD.MM.YYYY HH:mm:ss')

    /**
     * If endTime is before startTime we need to add one day
     * to endTime.
     *
     * This is because the following input is possible:
     * ID: 1, Name: Foo Bar: Date: 1.1.2019, Start: 23:00, End: 02:00
     */
    if (endTime < startTime) {
      endTime.add(1, 'days')
    }

    const hours = getWorkShiftInHours(startTime, endTime)
    const eveningHours = getWorkShiftEveningHours(hours, startTime, endTime)
    const overtimeHours = Math.max(0, hours - 8)

    day.hours += hours
    day.eveningHours += eveningHours

    // Not really optimal, if person has multiple workshifts per day these
    // will be calculated on every iteration.
    day.wage = getDayWage(hours, eveningHours, overtimeHours)
    day.overtimeHours = overtimeHours

    return acc
  }, [])

  return monthlyWages
}

export default calculateMonthlyWages
