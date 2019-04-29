// @flow
import moment, {type Moment} from 'moment'

type R = {
  startTime: Moment,
  endTime: Moment,
}

const getFullTimestamps = (date: string, start: string, end: string): R => {

  const startTime = moment(`${date} ${start}`, 'DD.MM.YYYY HH:mm:ss')
  const endTime = moment(`${date} ${end}`, 'DD.MM.YYYY HH:mm:ss')

  /**
   * If endTime is before startTime we need to add one day
   * to endTime.
   *
   * This is because the following input is possible:
   * ID: 1, Name: Foo Bar: Date: 1.1.2019, Start: 23:00, End: 02:00
   */
  if (endTime < startTime) {
    endTime.add(1, 'days')
  }

  return {
    startTime,
    endTime,
  }
}

export default getFullTimestamps
