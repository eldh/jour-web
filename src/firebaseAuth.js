import firebase from 'firebase'

export function signIn() {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.FacebookAuthProvider()
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          resolve(firebase.auth().currentUser)
        })
        .catch((e) => {
          reject({error: 'NOT_LOGGED_IN'})
        })
    })
  }
  return Promise.resolve(firebase.auth().currentUser)
}

function listenForUserChange(resolve, reject) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      resolve(user)
    } else {
      reject({error: 'NOT_LOGGED_IN'})
    }
  }, (err) => {
    console.log(err, 'err') // eslint-disable-line no-console
  })
}

export function listenForUser() {
  return new Promise(listenForUserChange)
}
