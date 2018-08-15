import React from 'react'
import { hot } from 'react-hot-loader'
import './Root.css'

import Counter from '../../components/Counter/Counter'
import Greeter from '../../components/Greeter/Greeter'

const Root = (props) => (
  <div id='application-root'>
    <h1><Greeter greeting={'Bonjour!'} />, Using React {React.version}</h1>
    <Counter />
  </div>
)

export default hot(module)(Root)
