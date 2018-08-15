import { shallow } from 'enzyme'
import React from 'react'
import Counter from './Counter'

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<Counter />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Component Actions', () => {
  test('component should increment counter when + button is pressed', () => {
    const wrapper = shallow(<Counter />)

    expect(wrapper.state().value).toEqual(0)
    wrapper.find('.counter-increment-btn').simulate('click')
    expect(wrapper.state().value).toBe(1)
  })

  test('component should increment counter when - button is pressed', () => {
    const wrapper = shallow(<Counter />)

    expect(wrapper.state().value).toEqual(0)
    wrapper.find('.counter-decrement-btn').simulate('click')
    expect(wrapper.state().value).toBe(-1)
  })
})
