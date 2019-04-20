// @flow
import React, {useState} from 'react'
import css from './App.module.css'
import WagesTable from '../wages/components/WagesTable'
import PlaceholderTable from '../wages/components/PlaceholderTable'
import FileUpload from '../files/FileUpload'
import calculateWages from '../wages/util/calculateWages'
import parseCSVsToJSON from '../util/parseCSVsToJSON'

const App = () => {

  const [isUploading, setIsUploading] = useState(false)
  const [wageData, setWageData] = useState(null)

  const handleFileUpload = async (event) => {
    if (!event.target.files) {
      throw new Error('No files uploaded')
    }

    setIsUploading(true)

    // get files
    const files = event.target.files

    // csv to json parsing
    const data = await parseCSVsToJSON([...files])

    // validate json
    if (!data || data.length < 1) {
      throw new Error('No data found')
    }

    // calculate output
    const calculatedWageData = calculateWages(data)

    setWageData(calculatedWageData)
    setIsUploading(false)
  }

  return (
    <div className={css.app}>
      <div className={css.content}>
        <h1>Wage Calculator</h1>
        <p>Instructions</p>

        <FileUpload
          onChange={handleFileUpload}
          isUploading={isUploading}
        />

        {
          wageData
            ? <WagesTable
              wageData={wageData}
            />
            : <PlaceholderTable/>
        }

      </div>
    </div>
  )
}

export default App
