import {createElement as h} from 'react'
import {merge, style} from 'glamor'
import Box from './Box'
import {darkBackgroundColor, tripleSpace, space} from '../styleConstants'

const overlayStyles = {
  position: 'fixed',
  display: 'flex',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  paddingTop: tripleSpace,
  paddingBottom: space,
  width: '100vw',
  height: '100vh',
  backgroundColor: darkBackgroundColor,
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  overflow: 'auto',
}

const Overlay = ({children, styles, ...rest}) =>
  h(Box, {...rest, ...merge(style(overlayStyles), styles)}, children)

Overlay.displayName = 'Overlay'
export default Overlay
