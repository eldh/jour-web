import {createElement as h} from 'react'
import {merge, style} from 'glamor'
import Box from './Box'

const defaultStyles = {whiteSpace: 'pre-line'}

const Pre = ({component = 'pre', children, styles, ...props}) =>
  h(Box, {component: 'pre', ...props, ...merge(style(defaultStyles), styles)}, children)

Pre.displayName = 'Pre'
export default Pre
