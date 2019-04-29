// @flow
import React from 'react'
import css from './WageHeader.module.css'

type Props = {
  toggleDetailsTable: Function,
  worker: any,
  totalWage: string,
}
const WageHeader = ({toggleDetailsTable, worker, totalWage}: Props) => {

  return (
    <div className={css.wageHeader}>
      <div><button onClick={() => toggleDetailsTable()}>V</button></div>
      <div><p>{worker.id.toString()}</p></div>
      <div><p>{worker.fullname}</p></div>
      <div><p>{totalWage}</p></div>
    </div>
  )
}

export default WageHeader
