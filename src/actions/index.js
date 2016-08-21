import * as db from '../firebaseDB'
import * as auth from '../firebaseAuth'
import debounce from 'lodash.debounce'

export const getDiary = () => (dispatch) => {
  dispatch({type: 'GET_DIARY_REQUEST'})
  return db.getDiary()
    .then((value) => dispatch({type: 'GET_DIARY_DONE', value: value.val()}))
    .catch((e) => {
      dispatch({type: 'SIGN_IN_NEEDED'})
    })
}

export const updatePost = (post) => (dispatch) => {
  debouncedSavePost(post, dispatch)
  dispatch({type: 'UPDATE_POST', value: post})
}

export const savePost = (post) => (dispatch) => {
  dispatch({type: 'SAVE_POST_REQUEST'})
  return db.savePost(post)
    .then(() => dispatch({type: 'SAVE_POST_DONE'}))
    .catch((e) => {
      dispatch({type: 'SIGN_IN_NEEDED'})
    })
}

export const signIn = () => (dispatch) => {
  dispatch({type: 'SIGN_IN_REQUEST'})
  return auth.signIn()
    .then(handleSignInDone(dispatch))
    .catch((e) => {
      dispatch({type: 'SIGN_IN_NEEDED'})
    })
}

export const listenForUser = () => (dispatch) => {
  dispatch({type: 'LISTEN_FOR_USER_START'})
  return auth.listenForUser()
    .then(handleSignInDone(dispatch))
    .catch((e) => {
      dispatch({type: 'SIGN_IN_NEEDED'})
    })
}

export const selectPost = (date) => {
  return {type: 'SELECT_POST', value: date}
}

const handleSignInDone = (dispatch) => (user) => {
  dispatch({type: 'SIGN_IN_DONE', value: user})
  return dispatch(getDiary())
}

const debouncedSavePost = debounce((post, dispatch) => dispatch(savePost(post)), 2000)
