import {Component, PropTypes, createElement as h} from 'react'
import {space} from '../styleConstants'
import {getDateFromString, getDateString} from '../date'
import Box from './Box'
import Pre from './Pre'
import OverlayContainer from './OverlayContainer'
import ContentContainer from './ContentContainer'
import DiaryLink from './DiaryLink'
import DiaryPost from './DiaryPost'

const containerStyles = {
  position: 'fixed',
  top: 23,
  left: space,
}

const noPostsText = `This is where you will find your diary.

Only you can access the things you write. We keep it secret and safe on our servers.

So just start writing. Tomorrow you will see your first post here.
`

const isToday = (date) => date === getDateString(new Date())
const renderDates = ({posts, selectedPost}, selectPost) => {
  const isSelected = (date) => date === selectedPost
  const filteredPosts = Object.keys(posts).filter((date) => !isToday(date))
  if (!Object.keys(filteredPosts).length) {
    return h(Pre, {}, noPostsText)
  }
  return filteredPosts
    .sort((a, b) => getDateFromString(b) - getDateFromString(a))
    .map((date) =>
      isSelected(date) ?
        h(DiaryPost, {date, post: posts[date], key: date, onClick: () => selectPost(null)}) :
        h(DiaryLink, {date, key: date, onClick: () => selectPost(date)})
    )
}

class UserInfo extends Component {
  constructor() {
    super(...arguments)
    this.state = {open: false}
  }

  onToggle = () => {
    this.props.selectPost(null)
    this.setState({open: !this.state.open})
  }

  render() {
    return h(Box, {styles: containerStyles},
      h(OverlayContainer,
        {onToggle: this.onToggle, open: this.state.open},
        h(ContentContainer, {}, renderDates(this.props.diary, this.props.selectPost))
      )
    )
  }
}

UserInfo.propTypes = {
  diary: PropTypes.object,
  getDiary: PropTypes.func.isRequired,
  listenForUser: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired,
}

export default UserInfo
