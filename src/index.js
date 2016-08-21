import {createElement as h} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import initFirebase from './firebaseInit'
import configureStore from './configureStore'

initFirebase('Jour')

render(
  h(Provider,
    {store: configureStore({pee: 'pee'})},
    h(App, {})
  ),
  document.getElementById('app-root')
)
