import { shallow } from 'enzyme'
import React from 'react'
import Greeter from './Greeter'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<Greeter />)
    expect(wrapper).toMatchSnapshot()
  })
})
