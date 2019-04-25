// @flow
import moment, {type Moment} from 'moment'

/**
 * Calculate total workshift duration in hours between 2 moment timestamps.
 *
 * @param {Moment} startTime
 * @param {Moment} endTime
 */
const getWorkShiftInHours = (startTime: Moment, endTime: Moment): number => {

  const timeDiff = moment.duration(endTime.diff(startTime))
  const timeDiffInHours = timeDiff.asHours()

  return timeDiffInHours
}

export default getWorkShiftInHours
