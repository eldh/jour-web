import {Component, createElement as h} from 'react'
// import DiaryPost from '../shared/containers/DiaryPost'
// import DiaryUserInfo from '../shared/containers/DiaryUserInfo'
// import {backgroundColor, color, sizes, monospaceFonts} from '../styleConstants'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'
import {
  // StyleSheet,
  Text,
  View,
} from 'react-native'

export default class App extends Component {
  _facebookLogin = (data) => {
    console.log('Logged in!')
    console.log(data)
    const token = data.credentials.token
    this.firestack.signInWithProvider('facebook', token, '')
      .then((user) => {
        console.log(user, 'user')
        this.firestack.getToken().then((result) => {
          console.log(result, 'result')
        })
      })
  }
  render() {
    return h(View, {},
      h(Text, {}, 'hello...'),
      h(FBLogin, {
        permissions: ['email'],
        loginBehavior: FBLoginManager.LoginBehaviors.Native,
        onLogin: this._facebookLogin,
      }, 'FB login')
    )
  }
}
