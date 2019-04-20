// @flow
import Papa from 'papaparse'
import {type ParserResponse} from '../types'

const readFileAsync = (file: File): Promise<ParserResponse> => {
  return new Promise((resolve, reject) => {

    const reader = new FileReader()

    reader.onload = () => {
      const csv = reader.result
      const contents = Papa.parse(csv, {
        header: true,
      })

      resolve(contents)
    }

    reader.onerror = reject
    reader.readAsText(file)
  })
}

export default readFileAsync
