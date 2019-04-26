// @flow
import React from 'react'
import css from './Toast.module.css'

type Props = {
  message: {
    type: 'error' | 'notice',
    text: string,
  },
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
