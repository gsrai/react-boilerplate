import React from 'react'
import { render } from 'react-dom'
import Root from '../containers/Root/Root'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from '../configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('app-root')
)
