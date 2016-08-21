import {getDateString} from '../date'

const initialState = {value: '', date: getDateString(new Date()), status: ''}

function getCurrentPost({state, diary}) {
  const currentPost = (diary && diary.posts[getDateString(new Date())]) || {post: {}}
  return {...state, ...currentPost.post, status: 'SAVED'} || state
}

const post = (state = initialState, {type, value}) => {
  switch (type) {
  case 'UPDATE_POST':
    return {...state, ...value, status: 'CHANGED'}
  case 'SAVE_POST_REQUEST':
    return {...state, status: 'SAVING'}
  case 'SAVE_POST_DONE':
    return {...state, status: 'SAVED'}
  case 'GET_DIARY_DONE':
    return getCurrentPost({state, diary: value})
  default:
    return state
  }
}

export default post
