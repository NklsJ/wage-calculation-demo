// @flow
import {
  BASE_SALARY,
  PAYGRADE_1_MULTIPLIER,
  PAYGRADE_2_MULTIPLIER,
  PAYGRADE_3_MULTIPLIER,
} from '../constants'

/**
 * Receives total number of overtime hours and returns compensation.
 *
 * Overtime compensations are calculated as following:
 *
 * First 3 Hours ​(paygrade1) = BASE_SALARY + 25%
 * Next 1 Hour   (paygrade2) = BASE_SALARY + 50%
 * After That    (paygrade3) = BASE_SALARY + 100%
 *
 * @param {number} overtimeHours
 */
const getOvertimeCompensation = (overtimeHours: number): number => {

  // Overtime between 0 and 3 hours
  const paygrade1Hours = 3 - (Math.max(0, 3 - overtimeHours))
  const paygrade1Compensation = paygrade1Hours * PAYGRADE_1_MULTIPLIER * BASE_SALARY

  // Overtime between 3 and 4 hours
  const paygrade2Hours = 1 - (Math.max(0, 1 - Math.max(0, overtimeHours - paygrade1Hours)))
  const paygrade2Compensation = paygrade2Hours * PAYGRADE_2_MULTIPLIER * BASE_SALARY

  // Overtime over 4 hours
  const paygrade3Hours = Math.max(0, overtimeHours - paygrade1Hours - paygrade2Hours)
  const paygrade3Compensation = paygrade3Hours * PAYGRADE_3_MULTIPLIER * BASE_SALARY

  const overtimeCompensation = paygrade1Compensation + paygrade2Compensation + paygrade3Compensation

  return overtimeCompensation
}

export default getOvertimeCompensation
