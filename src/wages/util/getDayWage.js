// @flow
import getOvertimeCompensation from './getOvertimeCompensation'
import {
  BASE_SALARY,
  EVENING_WORK_SALARY,
} from '../constants'

const getDayWage = (totalHours: number = 0, eveningHours: number = 0, overtimeHours: number = 0): number => {

  const regularWage = (totalHours - overtimeHours) * BASE_SALARY

  const eveningCompensations = eveningHours * EVENING_WORK_SALARY

  let overtimeCompensation = 0
  if (overtimeHours > 0) {
    overtimeCompensation = getOvertimeCompensation(overtimeHours)
  }

  return parseFloat((regularWage + eveningCompensations + overtimeCompensation).toFixed(2))
}

export default getDayWage
