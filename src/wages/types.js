// @flow

type PersonWageData = {
  id: Number,
  fullname: String,
  monthlyWage: String,
}

type MonthlyWages = Array<PersonWageData>

export type WageData = Array<MonthlyWages>
