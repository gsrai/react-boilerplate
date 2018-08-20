import { take, put, call, fork } from 'redux-saga/effects'
import { watchRepoListLoad, loadRepoList } from './index'
import { LOAD_REPO_LIST_ACTION, actions } from '../../reducers/RepoListReducer'
import { getRepoList } from '../../api'

const { loadRepoListSuccess, loadRepoListFailure } = actions

const RESPONSE_MOCK = [
  {
    full_name: 'facebook/react',
    html_url: 'https://github.com/facebook/react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stargazers_count: 108963
  }
]

const query = { q: 'react' }

describe('watch repo list load action', () => {
  const generator = watchRepoListLoad()

  it('should watch for load repo list actions', () => {
    const expectedYield = take(LOAD_REPO_LIST_ACTION)
    expect(generator.next().value).toEqual(expectedYield)
  })

  it('forks the loadRepoList task', () => {
    const expectedYield = fork(loadRepoList, query)
    const mockedAction = { type: 'LOAD_REPO_LIST_ACTION', query }
    expect(generator.next(mockedAction).value).toEqual(expectedYield)
  })
})

describe('loadRepoList saga', () => {
  const generator = loadRepoList(query)

  it('should call get repo list api', () => {
    const expectedYield = call(getRepoList, query)
    expect(generator.next().value).toEqual(expectedYield)
  })

  it('should dispatch load repo list failed action if there is an error', () => {
    const expectedYield = put(loadRepoListFailure('error'))
    const mockedData = { error: 'error' }

    expect(generator.next(mockedData).value).toEqual(expectedYield)
    expect(generator.next().done).toBe(true)
  })

  it('should dispatch load repo list success action if repos are fetched correctly', () => {
    const gen = createInvokedGenerator()
    const expectedYield = put(loadRepoListSuccess(RESPONSE_MOCK))
    const mockedData = RESPONSE_MOCK

    expect(gen.next(mockedData).value).toEqual(expectedYield)
    expect(gen.next().done).toBe(true)
  })
})

const createInvokedGenerator = () => {
  const generator = loadRepoList(query)
  generator.next()
  return generator
}
