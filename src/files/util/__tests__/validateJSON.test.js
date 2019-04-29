import validateJSON from '../validateJSON'

import HourList from '../../../../__mocks__/data/HourList'
import InvalidHourList from '../../../../__mocks__/data/InvalidHourList'

describe('validateJSON: ', () => {

  it('should fail if no data is given', () => {

    const result = validateJSON()

    expect(result.isValid).toEqual(false)
    expect(result.message).not.toEqual('')
  })

  it('should fail if JSON is invalid', () => {

    const result = validateJSON(InvalidHourList)

    expect(result.isValid).toEqual(false)
    expect(result.message).not.toEqual('')
  })

  it('should succeed if JSON is valid', () => {

    const result = validateJSON(HourList)

    expect(result).toEqual({
      isValid: true,
      message: '',
    })
  })

})
