import {PropTypes, createElement as h} from 'react'
import DiaryLink from './DiaryLink'
import {style} from 'glamor'
import {tripleSpace} from '../styleConstants'
import Box from './Box'
import Pre from './Pre'

const DiaryPost = ({date, post, onClick}) =>
  h(Box, {},
    h(DiaryLink, {date, onClick}),
    h(Pre, style({marginBottom: tripleSpace}), post.post.value),
  )

DiaryPost.propTypes = {
  date: PropTypes.string,
  onClick: PropTypes.func,
  post: PropTypes.object,
}

export default DiaryPost
