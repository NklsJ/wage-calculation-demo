import getOvertimeCompensation from '../getOvertimeCompensation'

describe('getOvertimeCompensation: ', () => {

  it('should return empty if parameters not set', () => {

    const result = getOvertimeCompensation()
    expect(result).toEqual(0)
  })

  it('should handle paygrade 1 hours correctly: ', () => {

    const overtimeHours = 3

    const result = getOvertimeCompensation(overtimeHours)
    expect(result).toEqual(15.9375)
  })

  it('should handle paygrade 1 and 2 hours correctly: ', () => {

    const overtimeHours = 4

    const result = getOvertimeCompensation(overtimeHours)
    expect(result).toEqual(22.3125)
  })

  it('should handle all paygrades correctly: ', () => {

    const overtimeHours = 10

    const result = getOvertimeCompensation(overtimeHours)
    expect(result).toEqual(73.3125)
  })

})
