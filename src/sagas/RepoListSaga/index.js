import { take, put, call, fork } from 'redux-saga/effects'

import { LOAD_REPO_LIST_ACTION, actions } from '../../reducers/RepoListReducer'

import { getRepoList } from '../../api'

const {
  loadRepoListSuccess,
  loadRepoListFailure
} = actions

export function * loadRepoList(query) {
  const data = yield call(getRepoList, query)

  if (data && data.error) {
    yield put(loadRepoListFailure(data.error))
  } else {
    yield put(loadRepoListSuccess(data))
  }
}

export function * watchRepoListLoad() {
  while (true) {
    const { query } = yield take(LOAD_REPO_LIST_ACTION)
    yield fork(loadRepoList, query)
  }
}
