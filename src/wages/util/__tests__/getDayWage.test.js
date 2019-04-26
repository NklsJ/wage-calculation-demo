import getDayWage from '../getDayWage'

describe('getDayWage: ', () => {

  it('should should not crash if parameters not set', () => {

    const result = getDayWage()
    expect(result).toEqual(0)
  })

  it('should calculate wage correctly when no evening hours or overtime', () => {

    const totalHours = 8
    const eveningHours = 0
    const overtimeHours = 0

    const result = getDayWage(totalHours, eveningHours, overtimeHours)
    expect(result).toEqual(34)
  })

  it('should calculate wage correctly when evening hours included', () => {

    const totalHours = 8
    const eveningHours = 3
    const overtimeHours = 0

    const result = getDayWage(totalHours, eveningHours, overtimeHours)
    expect(result).toEqual(37.75)
  })

  it('should calculate wage correctly when overtime included', () => {

    const totalHours = 13
    const eveningHours = 0
    const overtimeHours = 5

    const result = getDayWage(totalHours, eveningHours, overtimeHours)
    expect(result).toEqual(64.81)
  })

  it('should calculate wage correctly when both evening hours and overtime included', () => {

    const totalHours = 16
    const eveningHours = 3
    const overtimeHours = 8

    const result = getDayWage(totalHours, eveningHours, overtimeHours)
    expect(result).toEqual(94.06)
  })


})
