import reducer, {
  actions,
  LOAD_REPO_LIST_ACTION_INIT,
  LOAD_REPO_LIST_ACTION,
  LOAD_REPO_LIST_ACTION_SUCCEDED,
  LOAD_REPO_LIST_ACTION_FAILED
} from './index'

const RESPONSE_MOCK = [
  {
    full_name: 'facebook/react',
    html_url: 'https://github.com/facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stargazers_count: 108963
  }
]

describe('Repo List Actions', () => {
  it('should create an action to initialise the loading of the repo list', () => {
    const expectedAction = {
      type: LOAD_REPO_LIST_ACTION_INIT
    }

    expect(actions.loadRepoListInit()).toEqual(expectedAction)
  })

  it('should create an action to load the repo list', () => {
    const repoName = 'react'
    const expectedAction = { type: LOAD_REPO_LIST_ACTION, query: { q: repoName } }
    expect(actions.loadRepoList(repoName)).toEqual(expectedAction)
  })

  it('should create an action to indicate that the repos loaded successfully', () => {
    const response = RESPONSE_MOCK
    const expectedAction = {
      type: LOAD_REPO_LIST_ACTION_SUCCEDED,
      response
    }

    expect(actions.loadRepoListSuccess(response)).toEqual(expectedAction)
  })

  it('should create an action to indicate that the repos failed to load', () => {
    const reason = 'cannot find repo'
    const expectedAction = {
      type: LOAD_REPO_LIST_ACTION_FAILED,
      reason
    }

    expect(actions.loadRepoListFailure(reason)).toEqual(expectedAction)
  })
})

describe('Repo List Reducer', () => {
  it('should return the initial state', () => {
    const expected = {
      loading: false,
      loadSuccess: false,
      loadError: false,
      repos: []
    }

    expect(reducer(undefined, {})).toEqual(expected)
  })

  it('should handle LOAD_REPO_LIST_ACTION_INIT', () => {
    const expected = {
      loading: false,
      loadSuccess: false,
      loadError: false,
      repos: []
    }

    expect(reducer(undefined, { type: LOAD_REPO_LIST_ACTION_INIT })).toEqual(expected)
  })

  it('should handle LOAD_REPO_LIST_ACTION', () => {
    const expected = {
      loading: true,
      loadSuccess: false,
      loadError: false,
      repos: []
    }

    expect(reducer(undefined, { type: LOAD_REPO_LIST_ACTION })).toEqual(expected)
  })

  it('should handle LOAD_REPO_LIST_ACTION_SUCCEDED', () => {
    const response = RESPONSE_MOCK
    const expected = {
      loading: false,
      loadSuccess: true,
      loadError: false,
      repos: RESPONSE_MOCK
    }

    const action = {
      type: LOAD_REPO_LIST_ACTION_SUCCEDED,
      response
    }

    expect(reducer(undefined, action)).toEqual(expected)
  })

  it('should handle LOAD_REPO_LIST_ACTION_FAILED', () => {
    const reason = 'cannot find repo'
    const expected = {
      loading: false,
      loadSuccess: false,
      loadError: true,
      repos: [],
      reason
    }

    const action = {
      type: LOAD_REPO_LIST_ACTION_FAILED,
      reason
    }

    expect(reducer(undefined, action)).toEqual(expected)
  })
})
