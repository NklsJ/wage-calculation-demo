import React from 'react'
import {shallow} from 'enzyme'

import WagesView from '../WagesView'
import monthlyWages from '../../../../__mocks__/data/monthlyWages'

describe('WagesView component: ', () => {

  it('Should render correctly', () => {
    const component = shallow(<WagesView monthlyWages={monthlyWages} />)
    expect(component).toMatchSnapshot()
  })

})
