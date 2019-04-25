import moment from 'moment'
import getWorkShiftEveningHours from '../getWorkShiftEveningHours'

describe('getWorkShiftInHours: ', () => {

  it('should return return empty if parameters not set', () => {
    const result = getWorkShiftEveningHours()
    expect(result).toEqual(0)
  })

  it('should return 0 when workshift doesn\'t have evening hours', () => {
    const totalHours = 8
    const startTime = moment('2019-01-01T08:00+02:00')
    const endTime = moment('2019-01-01T16:00+02:00')

    const result = getWorkShiftEveningHours(totalHours, startTime, endTime)
    expect(result).toEqual(0)
  })

  it('should return correct value when workshift has evening hours', () => {
    const totalHours = 10
    const startTime = moment('2019-01-01T02:30+02:00')
    const endTime = moment('2019-01-01T12:30+02:00')

    const result = getWorkShiftEveningHours(totalHours, startTime, endTime)
    expect(result).toEqual(3.5)
  })

  it('should handle evening shift boundaries corretly: ', () => {
    const eveningShiftTotalHours = 11
    const normalShiftTotalHours = 13

    const eveningShiftStartTime = moment('2019-01-01T19:00+02:00')
    const eveningShiftEndTime = moment('2019-01-02T06:00+02:00')

    const normalShiftStartTime = moment('2019-01-01T06:00+02:00')
    const normalShiftEndTime = moment('2019-01-01T19:00+02:00')

    const eveningShiftResult = getWorkShiftEveningHours(eveningShiftTotalHours, eveningShiftStartTime, eveningShiftEndTime)
    expect(eveningShiftResult).toEqual(eveningShiftTotalHours)

    const normalShiftResult = getWorkShiftEveningHours(normalShiftTotalHours, normalShiftStartTime, normalShiftEndTime)
    expect(normalShiftResult).toEqual(0)
  })

})
