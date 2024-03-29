import {connect} from 'react-redux'
import UserInfo from '../components/UserInfo'
import {getDiary, signIn, listenForUser, selectPost} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    getDiary: () => {
      dispatch(getDiary())
    },
    signIn: () => {
      dispatch(signIn())
    },
    listenForUser: () => {
      dispatch(listenForUser())
    },
    selectPost: (date) => {
      dispatch(selectPost(date))
    },
  }
}

const mapStateToProps = ({user, diary}) => ({user, diary})

const DiaryUserInfo = connect(mapStateToProps, mapDispatchToProps)(UserInfo)

export default DiaryUserInfo
