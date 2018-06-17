import { shallow } from 'enzyme'
import React from 'react'
import Root from './Root'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<Root />)
    expect(wrapper).toMatchSnapshot()
  })
})
