import React from 'react'
import {shallow} from 'enzyme'

import FileUpload from '../FileUpload'

describe('FileUpload component: ', () => {

  it('Should render correctly', () => {
    const component = shallow(<FileUpload onChange={() => {}} isUploading={false} />)
    expect(component).toMatchSnapshot()
  })

  it('Should show input as disabled if isUploading is true', () => {
    const component = shallow(<FileUpload onChange={() => {}} isUploading={true} />)
    expect(component).toMatchSnapshot()
  })

})
