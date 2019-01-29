import React from 'react'
import PropTypes from 'prop-types'
import RepoListItem from '../RepoListItem'

import './RepoList.css'

export const RepoList = (props) => {
  const { loading, loadSuccess, loadError, reason, repos } = props
  return (
    <div>
      <h1 className='repo-list__heading'>Example</h1>
      <div>
        { loading &&
          'loading repositories...'
        }
        { loadSuccess &&
          repos.map((repo, i) => (<RepoListItem key={i} repo={repo} />))
        }
        { loadError &&
          'A problem has occurred: ' + reason
        }
      </div>
    </div>
  )
}

RepoList.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  loadError: PropTypes.bool.isRequired,
  reason: PropTypes.string,
  repos: PropTypes.array
}

export default RepoList
