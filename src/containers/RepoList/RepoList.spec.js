import { shallow, mount } from 'enzyme'
import React from 'react'

import configureStore from 'redux-mock-store'
import ConnectedComponent, { RepoList } from './RepoList'

describe('Component Rendering', () => {
  const mockStore = configureStore()

  // beforeEach(() => {

  // })

  test('component should render connected component', () => {
    const initialState = createInitialState({})

    const store = mockStore(initialState)
    const wrapper = shallow(<ConnectedComponent store={store} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('component should render default', () => {
    const initialState = createInitialState({})
    const actions = {
      actions: {
        loadRepoListInit: jest.fn(),
        loadRepoList: jest.fn()
      }
    }
    const props = {
      ...initialState.repoListReducer,
      ...actions
    }
    const wrapper = shallow(<RepoList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('component should dispatch init and load actions on mount', () => {
    const initmock = jest.fn()
    const loadmock = jest.fn()
    const initialState = createInitialState({})
    const actions = {
      actions: {
        loadRepoListInit: initmock,
        loadRepoList: loadmock
      }
    }
    const props = {
      ...initialState.repoListReducer,
      ...actions
    }
    mount(<RepoList {...props} />)
    expect(initmock.mock.calls.length).toBe(1)
    expect(loadmock.mock.calls.length).toBe(1)
    expect(loadmock.mock.calls[0][0]).toEqual('react')
  })

  test('component should render loading text when loading', () => {
    const initialState = createInitialState({
      loading: true
    })

    const actions = {
      actions: {
        loadRepoListInit: jest.fn(),
        loadRepoList: jest.fn()
      }
    }

    const props = {
      ...initialState.repoListReducer,
      ...actions
    }

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

    const initialState = createInitialState({
      loadSuccess: true,
      repos: repoData
    })

    const actions = {
      actions: {
        loadRepoListInit: jest.fn(),
        loadRepoList: jest.fn()
      }
    }

    const props = {
      ...initialState.repoListReducer,
      ...actions
    }

    const wrapper = shallow(<RepoList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('component should pass reason when there is an error', () => {
    const reason = 'cannot load repos'
    const initialState = createInitialState({
      loadError: true,
      reason
    })

    const actions = {
      actions: {
        loadRepoListInit: jest.fn(),
        loadRepoList: jest.fn()
      }
    }

    const props = {
      ...initialState.repoListReducer,
      ...actions
    }

    const wrapper = shallow(<RepoList {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

const createInitialState = (state) => {
  const repoListReducerState = {
    loading: state.loading || false,
    loadSuccess: state.loadSuccess || false,
    loadError: state.loadError || false,
    repos: state.repos || [],
    reason: state.reason || ''
  }

  const initialState = {
    repoListReducer: repoListReducerState
  }

  return initialState
}
