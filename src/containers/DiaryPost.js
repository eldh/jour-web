import {connect} from 'react-redux'
import {updatePost, savePost, getDiary} from '../actions'

const mapDispatchToProps = (dispatch) => ({
  updatePost: (value) => {
    dispatch(updatePost(value))
  },
  savePost: (value) => {
    dispatch(savePost(value))
  },
  getDiary: () => {
    dispatch(getDiary())
  },
})

const mapStateToProps = ({post, user}) => ({post, user})

const DiaryPost = connect(mapStateToProps, mapDispatchToProps)

export default DiaryPost
