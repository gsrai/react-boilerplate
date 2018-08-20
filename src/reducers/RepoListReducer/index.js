export const LOAD_REPO_LIST_ACTION_INIT = 'LOAD_REPO_LIST_ACTION_INIT'
export const LOAD_REPO_LIST_ACTION = 'LOAD_REPO_LIST_ACTION'
export const LOAD_REPO_LIST_ACTION_SUCCEDED = 'LOAD_REPO_LIST_ACTION_SUCCEDED'
export const LOAD_REPO_LIST_ACTION_FAILED = 'LOAD_REPO_LIST_ACTION_FAILED'

export const actions = {
  loadRepoListInit: () => ({ type: LOAD_REPO_LIST_ACTION_INIT }),
  loadRepoList: (repoName) => ({ type: LOAD_REPO_LIST_ACTION, query: { q: repoName } }),
  loadRepoListSuccess: (response) => ({ type: LOAD_REPO_LIST_ACTION_SUCCEDED, response }),
  loadRepoListFailure: (reason) => ({ type: LOAD_REPO_LIST_ACTION_FAILED, reason })
}

export const initialState = {
  loading: false,
  loadSuccess: false,
  loadError: false,
  repos: []
}

export default function RepoListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPO_LIST_ACTION_INIT:
      return initialState

    case LOAD_REPO_LIST_ACTION:
      return {
        ...state,
        loading: true,
        loadSuccess: false,
        loadError: false
      }

    case LOAD_REPO_LIST_ACTION_SUCCEDED:
      return {
        ...state,
        loading: false,
        loadSuccess: true,
        loadError: false,
        repos: action.response
      }

    case LOAD_REPO_LIST_ACTION_FAILED:
      return {
        ...state,
        loading: false,
        loadSuccess: false,
        loadError: true,
        reason: action.reason
      }

    default:
      return state
  }
}
