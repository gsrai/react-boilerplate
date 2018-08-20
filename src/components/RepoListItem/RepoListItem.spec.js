import { shallow } from 'enzyme'
import React from 'react'
import RepoListItem from './index'

const REPO_MOCK = {
  full_name: 'facebook/react',
  html_url: 'https://github.com/facebook/react',
  description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
  stargazers_count: 108963
}

describe('Component Rendering', () => {
  test('component should render correctly', () => {
    const wrapper = shallow(<RepoListItem repo={REPO_MOCK} />)
    expect(wrapper).toMatchSnapshot()
  })
})
