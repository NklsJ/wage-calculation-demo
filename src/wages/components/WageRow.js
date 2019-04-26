// @flow
import React from 'react'
import {type Worker} from '../types'

type Props = {
  worker: Worker
}

const WageRow = ({worker}: Props) => {

  const totalSalary = worker.days.reduce((acc, currentItem) => {

    return parseFloat((acc + currentItem.wage).toFixed(2))
  }, 0)

  return (
    <tr>
      <td><span>V</span></td>
      <td>{worker.id.toString()}</td>
      <td>{worker.fullname}</td>
      <td>{`$${totalSalary.toFixed(2)}`}</td>
    </tr>
  )
}

export default WageRow
