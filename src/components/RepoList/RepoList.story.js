import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RepoList from './RepoList'

const generateProps = (opts) => {
  return {
    loading: opts.loading || false,
    loadSuccess: opts.loadSuccess || false,
    loadError: opts.loadError || false,
    reason: opts.reason || '',
    repos: opts.repos || [],
    loadRepos: opts.loadRepos || action('clicked')
  }
}

const mockRepos = [
  {
    full_name: 'facebook/react',
    html_url: 'https://github.com/facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stargazers_count: 108963
  }
]

storiesOf('Components / RepoList', module)
  .add('default', () => <RepoList {...generateProps({})} />)
  .add('loading', () => <RepoList {...generateProps({ loading: true })} />)
  .add('with Repos loaded', () => <RepoList {...generateProps({ loadSuccess: true, repos: mockRepos })} />)
  .add('with loading error', () => <RepoList {...generateProps({ loadError: true, reason: 'Network Error' })} />)
