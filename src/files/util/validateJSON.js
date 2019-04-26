// @flow
import Ajv from 'ajv'

type ValidatorResponse = {
  isValid: boolean,
  message: string,
}

const schema = {
  type: 'array',
  items : {
    type: 'object',
    properties: {
      'Person Name': {
        type: 'string',
      },
      'Person ID': {
        type: 'string',
      },
      'Date': {
        type: 'string',
      },
      'Start': {
        type: 'string',
      },
      'End': {
        type: 'string',
      },
    },
    required: [
      'Person Name',
      'Person ID',
      'Date',
      'Start',
      'End',
    ],
  },
}

const validateJSON = (data: any): ValidatorResponse => {

  const ajv = new Ajv({allErrors: true, jsonPointers: true})

  try {

    const validate = ajv.compile(schema)
    const isValid = validate(data)

    let validatorErrors = ''
    if (validate.errors) {
      validatorErrors = `${validate.errors.length} validator errors. Please check that the CSV is in the required format.`
    }

    return {isValid, message: validatorErrors}
  } catch (error) {

    return {isValid: false, message: error.message}
  }
}

export default validateJSON
