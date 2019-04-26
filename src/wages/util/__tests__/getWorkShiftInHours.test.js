import moment from 'moment'
import getWorkShiftInHours from '../getWorkShiftInHours'

describe('getWorkShiftInHours: ', () => {

  it('should return empty if parameters not set', () => {
    const result = getWorkShiftInHours()
    expect(result).toEqual(0)
  })

  it('should return correct amount of hours', () => {
    const startTime = moment('2019-01-01T00:00:00Z')
    const endTime = moment('2019-01-02T00:00:00Z')

    const result = getWorkShiftInHours(startTime, endTime)
    expect(result).toEqual(24)
  })

})
