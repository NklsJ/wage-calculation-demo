// @flow
import readFileAsync from './readFileAsync'
import {type JsonData} from '../types'

type R = Array<JsonData>

/**
 * Takes in an array of uploaded files and returns all of the uploaded
 * files parsed into same JSON array.
 *
 * @param {Array} files
 *
 * @returns {R}
 */
const parseCSVsToJSON = async (files: Array<File>): Promise<R> => {

  const result = files.reduce(async (acc, file) => {

    const {data} = await readFileAsync(file)
    // $FlowFixMe
    return [...acc, ...data]
  }, [])

  return result
}

export default parseCSVsToJSON
