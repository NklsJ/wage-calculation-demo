import Papa from 'papaparse'
import json from './HourList'

const HourList = Papa.unparse(json)

// CSV needs to be inside array because it's possible to upload multiple CSV:s.
export default [...HourList]
