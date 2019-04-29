// @flow
import React from 'react'
import css from './WageDetailsTable.module.css'
import getReadableHoursString from '../util/getReadableHoursString'

type Props = {
  isVisible: boolean,
  days: any,
  totalWage: string,
}

const Row = ({styles = [], children}: {styles?: Array<any>, children: Array<string>}) => {
  return (
    <div className={[css.row, ...styles].join(' ')}>
      {children.map((child, index) => <p key={index}>{child}</p>)}
    </div>
  )
}

const WageDetailsTable = ({isVisible, days, totalWage}: Props) => {

  return (
    <div className={[css.wageDetailsTable, isVisible ? css.visible : ''].join(' ')}>

      <Row styles={[css.header]} key={0}>
        {[
          'Date',
          'Hours',
          'Evening Hours',
          'Overtime Hours',
          'Day Wage',
        ]}
      </Row>

      {days.map((day, index) => {

        return (
          <Row key={index + 1}>
            {[
              day.date,
              getReadableHoursString(day.hours),
              getReadableHoursString(day.eveningHours),
              getReadableHoursString(day.overtimeHours),
              `$${day.wage.toFixed(2)}`,
            ]}
          </Row>
        )
      })}

      <Row styles={[css.footer]} key={days.lenght + 1}>
        {[
          'Total',
          '',
          '',
          '',
          totalWage,
        ]}
      </Row>

    </div>
  )
}

export default WageDetailsTable
