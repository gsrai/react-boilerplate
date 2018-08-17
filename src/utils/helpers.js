import qs from 'qs'
import { set } from 'lodash'

export const getQueryParams = (params) => qs.parse(params)

export const setQueryParams = (obj, opts = {}) => {
  const queryString = qs.stringify(obj, opts)
  if (queryString) return '?' + queryString
  return queryString
}

export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

export const mergeState = (oldState, newState) => Object.assign({}, deepCopy(oldState), newState)

export const createKV = (key, value) => set({}, key, value)
