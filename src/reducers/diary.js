const initialState = {posts: {}, selectedPost: null, status: 'INITIAL'}

const diary = (state = initialState, {type, value}) => {
  // console.log(type, value)
  switch (type) {
  case 'GET_DIARY_DONE':
    return {...state, ...value, status: 'FETCHED'}
  case 'SELECT_POST':
    return {...state, selectedPost: value}
  default:
    return state
  }
}

export default diary
