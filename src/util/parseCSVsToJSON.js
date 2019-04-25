// @flow
import readFileAsync from './readFileAsync'
import {type JsonData} from '../types'

type R = Array<JsonData>

/**
 * Takes in an array of uploaded files and returns all of the uploaded
 * files parsed into same flat JSON array.
 *
 * @param {Array} files
 *
 * @returns {R}
 */
const parseCSVsToJSON = async (files: Array<File>): Promise<R> => {

  // Will return nested array of JSON arrays. Each file will have it's own array.
  const result = await Promise.all(files.map(async (file) => {

    const {data} = await readFileAsync(file)
    return data
  }))

  // Flatten the nested array before returning
  const flatArray = [].concat.apply([], result)

  return flatArray
}

export default parseCSVsToJSON
