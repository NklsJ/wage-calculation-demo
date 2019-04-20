// @flow
import React from 'react'

type Props = {
  onChange: Function,
  isUploading: boolean,
}

const FileUpload = ({onChange, isUploading}: Props) => {

  return (
    <div>
      <h3>Upload CSV</h3>
      <input
        type="file"
        accept=".csv"
        disabled={isUploading}
        onChange={async event => await onChange(event)}
        multiple/>
    </div>
  )
}

export default FileUpload
