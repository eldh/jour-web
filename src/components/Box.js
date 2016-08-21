import {createElement as h} from 'react'
import {merge, style} from 'glamor'

const defaultStyles = {
  position: 'relative',
  display: 'flex',
  boxSizing: 'border-box',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'stretch',
  margin: 0,
  padding: 0,
}

const Box = ({component = 'div', children, styles, ...props}) =>
  h(component, {...props, ...merge(style(defaultStyles), styles)}, children)

Box.displayName = 'Box'
export default Box
