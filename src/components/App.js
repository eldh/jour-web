import {Component, createElement as h} from 'react'
import Box from './Box'
import DiaryPost from '../containers/DiaryPost'
import Post from '../components/Post'
import UserInfo from '../components/UserInfo'
import DiaryUserInfo from '../containers/DiaryUserInfo'
import {backgroundColor, color, sizes, monospaceFonts} from '../styleConstants'

const styles = {
  backgroundColor,
  color,
  minWidth: '100vw',
  minHeight: '100vh',
  lineHeight: '1.333333',
  fontSize: sizes.default,
  fontFamily: monospaceFonts,
}

class App extends Component {
  render() {
    return h(Box, {styles},
      h(DiaryPost(Post), {}),
      h(DiaryUserInfo(UserInfo), {})
    )
  }
}

export default App
