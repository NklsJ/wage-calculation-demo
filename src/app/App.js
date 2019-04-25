// @flow
import React, {useState} from 'react'
import css from './App.module.css'
import WagesView from '../wages/components/WagesView'
import PlaceholderTable from '../wages/components/PlaceholderTable'
import FileUpload from '../files/FileUpload'
import calculateMonthlyWages from '../wages/util/calculateMonthlyWages'
import parseCSVsToJSON from '../util/parseCSVsToJSON'

const App = () => {

  const [isUploading, setIsUploading] = useState(false)
  const [monthlyWages, setMonthlyWages] = useState(null)

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
    const calculatedMonthlyWages = await calculateMonthlyWages(data)

    setMonthlyWages(calculatedMonthlyWages)
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

        {monthlyWages
          ? <WagesView monthlyWages={monthlyWages} />
          : <PlaceholderTable/>
        }

      </div>
    </div>
  )
}

export default App
