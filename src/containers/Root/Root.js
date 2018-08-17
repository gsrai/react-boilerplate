import React from 'react'
import { Link, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import './Root.css'

import Counter from '../../components/Counter/Counter'
import Greeter from '../../components/Greeter/Greeter'
import RepoList from '../RepoList/RepoList'

const Root = (props) => (
  <div id='application-root'>
    <h1><Greeter greeting={'Bonjour!'} />, Using React {React.version}</h1>
    <Counter />
    <nav>
      <Link to={'/repolist'}>Repo List</Link>
    </nav>
    <div>
      <Route path={'/repolist'} component={RepoList} />
    </div>
  </div>
)

export default hot(module)(Root)
