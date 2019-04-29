// @flow
import React from 'react'
import WageRow from './WageRow'
import css from './WagesTable.module.css'
import {type Worker} from '../types'

type Props = {
  workers: Array<Worker>,
}

const WagesTable = ({workers}: Props) => {
  return (
    <div className={css.wageTable}>
      {workers.sort((a, b) => a.id - b.id)
        .map((item, index) => {

          if (
            !item.id ||
              !item.fullname ||
              !item.days
          ) {
            return null
          }

          return <WageRow key={index} worker={item}/>
        })}
    </div>
  )
}

export default WagesTable
