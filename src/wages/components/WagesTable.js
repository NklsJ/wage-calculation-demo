// @flow
import React from 'react'
import css from './WagesTable.module.css'
import {type JsonData} from '../../types'

type Props = {
  wageData: ?Array<JsonData>,
}

const WagesTable = ({wageData}: Props) => {

  return (
    <div>
      <h3>Monthly Wages 03/2019</h3>
      <table className={css.wageTable}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Total Wage</td>
            <td></td>
          </tr>
          {wageData
            ? wageData.map((item, index) => {

              if (
                !item['Person ID'] ||
                !item['Person Name']
              ) {
                return null
              }

              return (
                <tr key={index}>
                  <td>{item['Person ID']}</td>
                  <td>{item['Person Name']}</td>
                  <td>{item['Date']}</td>
                  <td>{item['Start']}</td>
                  <td>{item['End']}</td>
                </tr>
              )
            })
            : <tr><td><p>Foo</p></td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default WagesTable
