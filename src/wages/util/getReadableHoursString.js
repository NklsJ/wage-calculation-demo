// @flow

const getReadableHoursString = (val: number): string => {
  const hours = Math.floor(val)
  const minutes = (val % 1) * 60

  if (minutes > 0) {
    return `${hours}h ${minutes}min`
  }

  return `${hours}h`
}

export default getReadableHoursString
