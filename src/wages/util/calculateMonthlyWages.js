// @flow
import moment from 'moment'
import getFullTimestamps from './getFullTimestamps'
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
  if (!data) {
    return []
  }

  const monthlyWages = data.reduce((acc, currentItem) => {

    const userId = parseInt(currentItem['Person ID'])
    const date = moment(currentItem['Date'], 'DD.MM.YYYY')

    // Months are 0 indexed. January will be 0, December 11 etc. Add 1 to the number to get real month number
    const month = date.month() + 1
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
      }

      worker.days.push(day)
    }

    const {startTime, endTime} = getFullTimestamps(currentItem['Date'], currentItem['Start'], currentItem['End'])

    const hours = getWorkShiftInHours(startTime, endTime)
    const eveningHours = getWorkShiftEveningHours(hours, startTime, endTime)

    day.hours += hours
    day.eveningHours += eveningHours

    const overtimeHours = Math.max(0, day.hours - 8)

    // Not really optimal, if person has multiple workshifts per day these
    // will be calculated on every iteration.
    day.wage = getDayWage(day.hours, day.eveningHours, overtimeHours)
    day.overtimeHours = overtimeHours

    return acc
  }, [])

  return monthlyWages
}

export default calculateMonthlyWages
