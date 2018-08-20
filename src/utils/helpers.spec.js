import {
  getQueryParams,
  setQueryParams,
  deepCopy,
  mergeState,
  createKV
} from './helpers'

describe('helpers', () => {
  test('setQueryParams returns empty string if qs was unable to stringify', () => {
    const result = setQueryParams(null)
    const expected = ''
    expect(result).toEqual(expected)
  })

  test('getQueryParams returns parsed params from qs library', () => {
    const result = getQueryParams('page=1&pagesize=100')
    const expected = { page: '1', pagesize: '100' }
    expect(result).toEqual(expected)
  })

  test('createKV creates a key value pair', () => {
    const result = createKV('foo', 1337)
    const expected = { foo: 1337 }
    expect(result).toEqual(expected)
  })

  test('deepCopy copies nested object correctly', () => {
    const obj = { filter: { badgeName: 'foo' }, page: 1 }
    const result = deepCopy(obj)
    const expected = obj
    expect(result.filter.badgeName).toEqual(expected.filter.badgeName)
    // mutate obj
    obj.filter.badgeName = 'bar'
    expect(result.filter.badgeName).not.toEqual(expected.filter.badgeName)
    expect(obj.filter.badgeName).toEqual(expected.filter.badgeName)
  })

  test('mergeState takes two states and merges them', () => {
    const oldState = { filter: { badgeName: 'foo' }, page: 1 }
    const newState = { filter: { badgeName: 'bar' }, pagesize: 100 }
    const result = mergeState(oldState, newState)
    const expected = { filter: { badgeName: 'bar' }, page: 1, pagesize: 100 }
    expect(result).toEqual(expected)
  })
})
