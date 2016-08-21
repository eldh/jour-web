const initialState = {}

const post = (state = initialState, {type, value}) => {
  switch (type) {
  case 'SIGN_IN_DONE':
    return value
  case 'SIGN_IN_NEEDED':
    return {status: 'NOT_LOGGED_IN'}
  default:
    return state
  }
}

export default post
