// @flow
import React, {useState} from 'react'

const FileUpload = () => {

  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (event) => {
    setIsUploading(true)

    setIsUploading(false)
  }

  return (
    <div>
      <h3>Upload CSV</h3>
      <input
        type="file"
        disabled={isUploading}
        onChange={event => handleFileUpload(event)}
        multiple/>
    </div>
  )
}

export default FileUpload
