import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
const logger = createLogger()

export default function configureStore(initialState) {
  // const store = createStore(rootReducer)
  // if (module.hot) {
  //   // Enable hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     const nextRootReducer = require('./reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  if (window.__store) {
    window.__store.replaceReducer(rootReducer)
  } else {
    window.__store = createStore(
      rootReducer,
      applyMiddleware(thunk, logger)
    )
  }

  return window.__store
}
