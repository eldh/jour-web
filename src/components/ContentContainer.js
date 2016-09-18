import {createElement as h} from 'react'
import Box from './Box'
import {containerWidth, space} from '../styleConstants'

const defaultStyles = {
  maxWidth: '100%',
  width: containerWidth,
  margin: '0 auto',
  padding: `0 ${space}px`,
  justifyContent: 'flex-start',
  alignContent: 'center',
  flexGrow: 1,
  height: 'auto',
}

const ContentContainer = ({children, styles}) => {
  return h(Box, {styles: {...defaultStyles, ...styles}}, children)
}

export default ContentContainer
