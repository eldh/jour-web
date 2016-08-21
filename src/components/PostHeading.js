import {createElement as h} from 'react'
import {style} from 'glamor'
import Heading from './Heading'
import {space, monospaceFonts, headingColor} from '../styleConstants'
import {getHumanDateString} from '../date'

const PostHeading = ({post}) =>
  h(Heading, {type: 2, ...style({
    textAlign: 'center',
    marginBottom: space,
    fontFamily: monospaceFonts,
    color: headingColor,
  })}, post.date ? getHumanDateString(post.date) : '')

PostHeading.displayName = 'PostHeading'
export default PostHeading
