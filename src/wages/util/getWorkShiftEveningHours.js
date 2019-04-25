// @flow
import moment, {type Moment} from 'moment'
import {workingDiff} from 'moment-business-time' // eslint-disable-line

/**
 * Configure business hours per weekdays.
 * Setting value to null instead of timerange will mark day as non-working day.
 * In this task all weekdays are considered as workdays.
 */
moment.updateLocale('en', {
  workinghours: {
    // $FlowFixMe
    0: ['06:00:00', '19:00:00'],
    // $FlowFixMe
    1: ['06:00:00', '19:00:00'],
    // $FlowFixMe
    2: ['06:00:00', '19:00:00'],
    // $FlowFixMe
    3: ['06:00:00', '19:00:00'],
    // $FlowFixMe
    4: ['06:00:00', '19:00:00'],
    // $FlowFixMe
    5: ['06:00:00', '19:00:00'],
    // $FlowFixMe
    6: ['06:00:00', '19:00:00'],
  },
})

/**
 * Calculate how many hours (with 2 decimals) are outside of normal business hours.
 * This result can be used to calculate evening pay.
 *
 * @param {number} shiftTotalHours
 * @param {Moment} startTime
 * @param {Moment} endTime
 */
const getWorkShiftEveningHours = (shiftTotalHours: number, startTime: Moment, endTime: Moment): number => {

  // First, calculate how many hours of the workshift is done between normal business hours (06:00 - 19:00)
  const hoursDuringBusinessHours = endTime.workingDiff(startTime, 'hours', true)

  // Then deduct normal hours from shiftTotalHours to get the number of hours outside of business hours
  const eveningHours = shiftTotalHours - hoursDuringBusinessHours

  return eveningHours
}

export default getWorkShiftEveningHours
