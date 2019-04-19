// @flow
import React from 'react'
import css from './App.module.css'
import WagesTable from '../wages/WagesTable'
import FileUpload from '../files/FileUpload'

const App = () => {

  return (
    <div className={css.app}>
      <div className={css.content}>
        <h1>Wage Calculator</h1>
        <p>Instructions</p>

        <FileUpload/>

        <WagesTable/>
      </div>
    </div>
  )
}

export default App
