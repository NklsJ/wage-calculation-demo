// @flow
import React from 'react'
import css from './Toast.module.css'
import {type ToastMessage} from '../types'

type Props = {
  message: ToastMessage,
  handleCloseClick: Function,
}

const Toast = ({message, handleCloseClick}: Props) => {

  return (
    <div className={[css.toast, message.type === 'error' ? css.error : css.notice].join(' ')}>
      <p>{message.text}</p>
      <button
        className={css.closeButton}
        onClick={handleCloseClick}>
        X
      </button>
    </div>
  )
}

export default Toast
