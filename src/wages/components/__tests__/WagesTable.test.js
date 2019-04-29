import React from 'react'
import {shallow} from 'enzyme'

import WagesTable from '../WagesTable'
import monthlyWages from '../../../../__mocks__/data/monthlyWages'

describe('WagesTable component: ', () => {

  it('Should render correctly', () => {
    const component = shallow(<WagesTable workers={monthlyWages[0].workers} />)
    expect(component).toMatchSnapshot()
  })

})
