import config from '../config'
import { setQueryParams } from '../utils/helpers'

let _fetch = window.fetch // eslint-disable-line

export const genericErrorMessage = 'Sorry there was a network/server issue, please try again later'

export const getRepoList = async (queryParams, fetch = _fetch) => {
  const url = config.repoListUrl + setQueryParams(queryParams, { encode: false })

  const headers = {
    'Accept': 'application/json'
  }

  const opts = {
    method: 'GET',
    headers
  }

  try {
    const response = await fetch(url, opts)
    if (!response.ok) {
      throw new Error(await response.json())
    }
    const json = await response.json()
    return (json && json.items) || []
  } catch (e) {
    console.error('Error: ', e.message)
    return {
      error: genericErrorMessage
    }
  }
}
