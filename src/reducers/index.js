import {combineReducers} from 'redux'
import post from './post'
import user from './user'
import diary from './diary'

export default combineReducers({
  diary,
  post,
  user,
})
