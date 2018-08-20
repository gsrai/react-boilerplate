import { fork } from 'redux-saga/effects'
import { watchRepoListLoad } from './RepoListSaga'

export default function * root() {
  yield [
    fork(watchRepoListLoad)
  ]
}
