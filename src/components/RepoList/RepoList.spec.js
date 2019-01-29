import { shallow } from 'enzyme'
import React from 'react'
import RepoList from './RepoList'

describe('foo', () => {
  test('component should render loading text when loading', () => {
    const props = genProps({ loading: true })
    const wrapper = shallow(<RepoList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('component should render repo data when successfully loaded', () => {
    const repoData = [
      {
        full_name: 'facebook/react',
        html_url: 'https://github.com/facebook/react',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        stargazers_count: 108963
      }
    ]
    const props = genProps({ loadSuccess: true, repos: repoData })
    const wrapper = shallow(<RepoList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('component should pass reason when there is an error', () => {
    const reason = 'cannot load repos'
    const props = genProps({ loadError: true, reason })
    const wrapper = shallow(<RepoList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

// maybe this should be a fixture/s
function genProps(opts) {
  return {
    loading: opts.loading || false,
    loadSuccess: opts.loadSuccess || false,
    loadError: opts.loadError || false,
    reason: opts.reason || '',
    repos: opts.repos || []
  }
}
