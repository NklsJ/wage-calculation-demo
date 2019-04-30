// @flow
import React, {useState, Fragment} from 'react'
import WageHeader from './WageHeader'
import WageDetailsTable from './WageDetailsTable'
import {type Worker} from '../types'

type Props = {
  worker: Worker
}

const WageRow = ({worker}: Props) => {

  const [detailsTableIsVisible, setDetailsTableIsVisible] = useState(false)

  const toggleDetailsTable = () => setDetailsTableIsVisible(!detailsTableIsVisible)

  const totalSalary = worker.days.reduce((acc, currentItem) => {
    return parseFloat((acc + currentItem.wage).toFixed(2))
  }, 0)

  return (
    <Fragment>
      <WageHeader
        toggleDetailsTable={() => toggleDetailsTable()}
        worker={worker}
        totalWage={`$${totalSalary.toFixed(2)}`}
        detailsTableIsVisible={detailsTableIsVisible}/>
      <WageDetailsTable
        isVisible={detailsTableIsVisible}
        days={worker.days}
        totalWage={`$${totalSalary.toFixed(2)}`}/>
    </Fragment>
  )
}

export default WageRow
