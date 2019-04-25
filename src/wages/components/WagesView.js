// @flow
import React from 'react'
import WagesTable from './WagesTable'
import {type MonthlyWages} from '../types'

type Props = {
  monthlyWages: MonthlyWages,
}

const WagesView = ({monthlyWages}: Props) => {

  return (
    <div>
      {monthlyWages.map((item, index) => {

        return (
          <div key={index}>
            <h3>{`Monthly wages: ${item.month}/${item.year}`}</h3>

            <WagesTable workers={item.workers} />
          </div>
        )
      })
      }
    </div>
  )
}

export default WagesView
