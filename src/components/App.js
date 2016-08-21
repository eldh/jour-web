import {Component, createElement as h} from 'react'
import Box from './Box'
import DiaryPost from '../containers/DiaryPost'
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
      h(DiaryPost, {}),
      h(DiaryUserInfo, {})
    )
  }
}

export default App
