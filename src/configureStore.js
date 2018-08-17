import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore (history, initialState) {
  const sagaMiddleware = createSagaMiddleware()
  let store = null

  if (process.env.NODE_ENV === 'production') {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(sagaMiddleware)
      )
    )
  } else {
    const DevToolsExt = typeof (window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line

    store = createStore(
      rootReducer,
      initialState,
      // used composeWithDevTools instead of redux's compose
      // in order to have access to the redux-devtools-extension
      composeWithDevTools(
        applyMiddleware(sagaMiddleware)
      )
    )

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default // eslint-disable-line global-require
        store.replaceReducer(nextRootReducer)
      })
    }
  }

  store.close = () => store.dispatch(END)
  sagaMiddleware.run(rootSaga)
  return store
}
