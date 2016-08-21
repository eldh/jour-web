import firebase from 'firebase'

function rejectAndLog(reject) {
  return (err) => {
    console.log(err, 'err') // eslint-disable-line no-console
    reject(err)
  }
}

export function getDiary(user = firebase.auth().currentUser) {
  return new Promise((resolve, reject) => {
    // console.log(user, 'getDiary')
    if (!user) { reject({error: 'NOT_LOGGED_IN'}) }
    const diaryRef = firebase.app().database().ref(`/diary/${user.uid}`)
    diaryRef.on('value', resolve, rejectAndLog(reject))
  })
}

export function savePost(post, user = firebase.auth().currentUser) {
  // console.log(post, 'post')
  return new Promise((resolve, reject) => {
    if (!user) { reject({error: 'NOT_LOGGED_IN'}) }
    const diaryRef = firebase.app().database().ref(`/diary/${user.uid}/posts/${post.date}`)
    diaryRef.on('value', resolve, rejectAndLog(reject))
    diaryRef.set({post})
  })
}
