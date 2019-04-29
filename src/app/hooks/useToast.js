// @flow
import {useState, useEffect} from 'react'
import {type ToastMessage} from '../types'

type P = ?ToastMessage

const useToast = (toast: P) => {
  const [toastMessage, setToastMessage] = useState<P>(null)

  useEffect(() => {
    let interval

    if (toastMessage) {
      interval = setInterval(() => setToastMessage(null), 5000)
    }

    return () => clearInterval(interval)
  }, [toastMessage])

  return [toastMessage, setToastMessage]
}

export default useToast
