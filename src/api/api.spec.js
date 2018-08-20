import config from '../config'
import {
  getRepoList,
  genericErrorMessage
} from './index'

describe('get repo list api', () => {
  const query = { q: 'react' }

  it('should pass correct method, headers and query params', async () => {
    const jsonPayload = createReposMockResponse({})
    const mockFetch = createMockFetch(true, jsonPayload, null, 200)
    await getRepoList(query, mockFetch)

    expect(mockFetch).toHaveBeenCalled()
    expect(mockFetch.mock.calls[0][0]).toBe(config.repoListUrl + '?q=react')
    const opts = mockFetch.mock.calls[0][1]
    expect(opts.method).toBe('GET')
    expect(opts.headers.Accept).toBe('application/json')
  })

  it('should return correct json on successful request', async () => {
    const jsonPayload = createReposMockResponse({})
    const expectedResponse = jsonPayload
    const mockFetch = createMockFetch(true, jsonPayload, null, 200)
    const actualResponse = await getRepoList(query, mockFetch)
    expect(actualResponse).toEqual(expectedResponse.items)
  })

  it('should return 400 if validation fails', async () => {
    const errMsg = 'Validation Failed'
    const expectedResponse = createMockErrorResponse(errMsg)

    const mockFetch = createMockFetch(false, expectedResponse, null, 400)
    const actualResponse = await getRepoList({}, mockFetch)
    expect(actualResponse.error).toEqual(expectedResponse.message)
  })

  it('should return server error if upstream service is down', async () => {
    const expectedResponse = { error: genericErrorMessage }

    const mockFetch = createMockFetch(false, null, 'pdp is down', 500)
    const actualResponse = await getRepoList(query, mockFetch)
    expect(actualResponse).toEqual(expectedResponse)
  })

  it('should return error if there is a network error', async () => {
    const expectedResponse = { error: genericErrorMessage }
    const mockFetch = createMockFetchReject({ message: 'Network Error' })
    const actualResponse = await getRepoList(query, mockFetch)
    expect(actualResponse).toEqual(expectedResponse)
  })

  it('should use window.fetch', async () => {
    const mockFetch = window.fetch
    await getRepoList(query)
    expect(mockFetch.mock.calls.length).toBe(1)
    mockFetch.mockClear()
  })
})

const createMockFetchReject = (e) => {
  return jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      reject(e)
    })
  })
}

const createMockFetch = (ok, json, text, status) => {
  return jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok,
        status,
        text: () => new Promise((resolve, reject) => resolve(text)),
        json: () => {
          return new Promise((resolve, reject) => resolve(json))
        }
      })
    })
  })
}

const createMockErrorResponse = (msg) => {
  return {
    'message': msg,
    'errors': [
      {
        'resource': 'Search',
        'field': 'q',
        'code': 'missing'
      }
    ],
    'documentation_url': 'https://developer.github.com/v3/search'
  }
}

const createReposMockResponse = ({ id, fullName, description, url, stars }) => {
  return {
    items: [
      {
        'id': id || 10270250,
        'full_name': fullName || 'facebook/react',
        'html_url': url || 'https://github.com/facebook/react',
        'description': description || 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        'stargazers_count': stars || 108963
      }
    ]
  }
}
