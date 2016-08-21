import {Component, PropTypes, createElement as h} from 'react'
import LoggedInUserInfo from './LoggedInUserInfo'
import LoggedOutUserInfo from './LoggedOutUserInfo'

class UserInfo extends Component {
  componentDidMount() {
    this.props.listenForUser()
  }

  render() {
    return this.props.user.status === 'NOT_LOGGED_IN' ?
      h(LoggedOutUserInfo, this.props) :
      h(LoggedInUserInfo, this.props)
  }
}

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  listenForUser: PropTypes.func.isRequired,
}

export default UserInfo
