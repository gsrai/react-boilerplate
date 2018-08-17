import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as repoListActions } from '../../reducers/RepoListReducer'
import RepoListItem from '../../components/RepoListItem'

class RepoList extends React.Component {
  componentDidMount() {
    this.props.actions.loadRepoListInit()
    this.props.actions.loadRepoList('preact')
  }

  render() {
    const { loading, loadSuccess, loadError, reason, repos } = this.props
    return (
      <div>
        <h1>Example</h1>
        <div>
          { loading &&
            'loading repositories...'
          }
          { loadSuccess &&
            repos.map(repo => (<RepoListItem repo={repo} />))
          }
          { loadError &&
            'A problem has occurred: ' + reason
          }
        </div>
      </div>
    )
  }
}

RepoList.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadSuccess: PropTypes.bool.isRequired,
  loadError: PropTypes.bool.isRequired,
  reason: PropTypes.string,
  repos: PropTypes.array,
  actions: PropTypes.object.isRequired
}

export default connect(
  state => {
    const loading = state.repoListReducer.loading
    const loadSuccess = state.repoListReducer.loadSuccess
    const loadError = state.repoListReducer.loadError
    const reason = state.repoListReducer.reason

    const repos = state.repoListReducer.repos

    return { loading, loadSuccess, loadError, reason, repos }
  },
  dispatch => ({
    actions: bindActionCreators(repoListActions, dispatch)
  })
)(RepoList)
