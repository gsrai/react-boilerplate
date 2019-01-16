import { shallow } from 'enzyme'
import React from 'react'

import configureStore from 'redux-mock-store'
import RepoListContainer from './RepoListContainer'
import { actions } from '../../reducers/RepoListReducer'

describe('Component', () => {
  const mockStore = configureStore()
  const store = mockStore({
    repoListReducer: {
      loading: false,
      loadSuccess: false,
      loadError: false,
      repos: [],
      reason: ''
    }
  })

  beforeEach(() => store.clearActions())

  test('component should render connected component', () => {
    const wrapper = shallow(<RepoListContainer store={store} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('component should render correctly', () => {
    const wrapper = shallow(<RepoListContainer store={store} />).dive()
    expect(wrapper).toMatchSnapshot()
  })

  test('component should dispatch init and load actions on mount', () => {
    shallow(<RepoListContainer store={store} />).dive()
    const dispatchedActions = store.getActions()
    expect(dispatchedActions).toEqual([
      actions.loadRepoListInit(),
      actions.loadRepoList('react')
    ])
  })
})
