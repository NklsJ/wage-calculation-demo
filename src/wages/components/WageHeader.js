// @flow
import React from 'react'
import css from './WageHeader.module.css'

type Props = {
  toggleDetailsTable: Function,
  worker: any,
  totalWage: string,
  detailsTableIsVisible: boolean,
}
const WageHeader = ({toggleDetailsTable, worker, totalWage, detailsTableIsVisible}: Props) => {

  return (
    <div className={css.wageHeader}>
      <div>
        <span
          role="button"
          onKeyPress={() => {}}
          tabIndex={0}
          className={[css.toggleButton ,detailsTableIsVisible && css.toggled].join(' ')}
          onClick={() => toggleDetailsTable()}>v</span>
      </div>
      <div><p>{worker.id.toString()}</p></div>
      <div><p>{worker.fullname}</p></div>
      <div><p>{totalWage}</p></div>
    </div>
  )
}

export default WageHeader
