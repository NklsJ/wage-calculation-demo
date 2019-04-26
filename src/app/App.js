// @flow
import React, {useState} from 'react'
import css from './App.module.css'

import Toast from './components/Toast'
import Header from './components/Header'
import WagesView from '../wages/components/WagesView'
import PlaceholderTable from '../wages/components/PlaceholderTable'
import FileUpload from '../files/FileUpload'

import calculateMonthlyWages from '../wages/util/calculateMonthlyWages'
import parseCSVsToJSON from '../files/util/parseCSVsToJSON'

const App = () => {

  const [toastMessage, setToastMessage] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [monthlyWages, setMonthlyWages] = useState(null)

  const clearToast = () => {
    setToastMessage(null)
  }

  const handleFileUpload = async (event) => {
    if (!event.target.files) {
      throw new Error('No files uploaded')
    }

    setIsUploading(true)

    try {

      const data = await parseCSVsToJSON([...event.target.files])

      // calculate output
      const calculatedMonthlyWages = await calculateMonthlyWages(data)

      setMonthlyWages(calculatedMonthlyWages)
      setToastMessage({type: 'notice', text: 'CSV\'s parsed'})
    } catch (error) {

      setToastMessage({type: 'error', text: error.message})
    }

    setIsUploading(false)
  }

  return (
    <div className={css.app}>
      <div className={css.content}>
        <Header />

        <FileUpload
          onChange={handleFileUpload}
          isUploading={isUploading}
        />

        {monthlyWages
          ? <WagesView monthlyWages={monthlyWages} />
          : <PlaceholderTable/>
        }

        {toastMessage
          && <Toast message={toastMessage} handleCloseClick={() => clearToast()}/>
        }
      </div>
    </div>
  )
}

export default App
