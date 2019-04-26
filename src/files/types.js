// @flow

export type JsonData = {
  'Person Name': string,
  'Person ID': string,
  'Date': string,
  'Start': string,
  'Start': string,
  'End': string,
}

export type ParserResponse = {
  data: Array<JsonData>,
  errors: Array<any>,
  meta: Object,
}
