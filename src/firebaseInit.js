/* eslint-disable no-console */
import firebase from 'firebase'

export default function({onSignInDone}) {
  const config = {
    apiKey: 'AIzaSyCUuQPNlrzyUDoRrluqU27MpAwdB5N0aa0',
    authDomain: 'jour-76933.firebaseapp.com',
    databaseURL: 'https://jour-76933.firebaseio.com',
    storageBucket: '',
  }

  firebase.apps.length || firebase.initializeApp(config)
}
