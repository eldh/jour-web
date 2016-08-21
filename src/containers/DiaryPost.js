import {connect} from 'react-redux'
import Post from '../components/Post'
import {updatePost, savePost, getDiary} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (value) => {
      dispatch(updatePost(value))
    },
    savePost: (value) => {
      dispatch(savePost(value))
    },
    getDiary: () => {
      dispatch(getDiary())
    },
  }
}

const mapStateToProps = ({post, user}) => ({post, user})

const DiaryPost = connect(mapStateToProps, mapDispatchToProps)(Post)

export default DiaryPost
