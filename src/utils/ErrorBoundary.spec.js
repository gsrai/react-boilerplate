import { shallow, mount } from 'enzyme'
import React from 'react'
import ErrorBoundary from './ErrorBoundary'

const errMsg = 'Oops something went wrong!'

class ErrorComp extends React.Component {
  render() {
    throw new Error(errMsg)
  }
}

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <div>foo</div>
      </ErrorBoundary>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('component should render correctly when error', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <ErrorComp />
      </ErrorBoundary>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.state().hasError).toBe(true)
  })
})
