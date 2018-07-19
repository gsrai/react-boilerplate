import React from 'react'
import { hot } from 'react-hot-loader'
import './Root.css'

const Root = (props) => (
  <div id='application-root'>
    <h1>Using React {React.version}</h1>
  </div>
)

export default hot(module)(Root)
