import calculateMonthlyWages from '../calculateMonthlyWages'
import HourList from '../../../../__mocks__/data/HourList'
import monthlyWages from '../../../../__mocks__/data/monthlyWages'

describe('calculateMonthlyWages: ', () => {

  it('should not crash if parameters not set', async () => {

    const result = await calculateMonthlyWages()
    expect(result).toEqual([])
  })

  it('should return array containing data', async () => {

    const result = await calculateMonthlyWages(HourList)
    expect(result.length).toBeGreaterThan(0)
    expect(result).toEqual(monthlyWages)
  })

})

