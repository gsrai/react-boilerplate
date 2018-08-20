import React from 'react'
import PropTypes from 'prop-types'

import './RepoListItem.css'

const RepoListItem = ({ repo }) => {
  return (
    <div className={'repo-list-item'}>
      <div>
        <a href={repo.html_url} target={'_blank'}>
          { repo.full_name }
        </a>
        🌟<strong>{ repo.stargazers_count }</strong>
      </div>
      <p>{ repo.description }</p>
    </div>
  )
}

RepoListItem.propTypes = {
  repo: PropTypes.object
}

export default RepoListItem
