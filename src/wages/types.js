// @flow

type ShiftObject = {
  start: string,
  end: string,
}

type DayObjects = {
  date: string,
  hours: number,
  eveninigHours: number,
  overtimeHours: number,
  wage: number,
  shifts: Array<ShiftObject>,
}

export type Worker = {
  id: number,
  fullname: string,
  days: Array<DayObjects>
}

export type MonthObject = {
  month: number,
  year: number,
  workers: Array<Worker>,
}

export type MonthlyWages = Array<MonthObject>
