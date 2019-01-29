import React from 'react'
import { Link, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import './Root.css'

import ErrorBoundary from '../../utils/ErrorBoundary'

import Counter from '../../components/Counter'
import Greeter from '../../components/Greeter'
import RepoListContainer from '../RepoListContainer'

const Root = (props) => (
  <div id='application-root'>
    <ErrorBoundary>
      <h1><Greeter greeting={'Bonjour!'} />, Using React {React.version}</h1>
      <Counter />
      <nav>
        <Link to={'/repolist'}>Repo List</Link>
      </nav>
      <div>
        <Route path={'/repolist'} component={RepoListContainer} />
      </div>
    </ErrorBoundary>
  </div>
)

export default hot(module)(Root)
