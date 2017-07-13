import React, {createElement as h} from 'react'
import {Provider} from 'react-redux'
import configureStore from './src/configureStore'
import App from './src/components/App'
import {
  AppRegistry,
  // StyleSheet,
  // Text,
  // View
} from 'react-native'

class jour extends React.Component {
  render() {
    return h(Provider,
      {store: configureStore({pee: 'pee'})},
      h(App, {})
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// })

AppRegistry.registerComponent('jour', () => jour)
