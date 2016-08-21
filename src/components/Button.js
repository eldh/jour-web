import {createElement as h} from 'react'
import {sizes, space, doubleSpace, monospaceFonts} from '../styleConstants.js'
import {focus, hover, merge} from 'glamor'

const Button = ({onClick, children, styles, disabled, type = 'normal'}) =>
  h('button',
    {
      onClick,
      disabled,
      ...merge(defaultStyles, styles, typeStyles(type)),
      ...focus({outline: 'none'}),
      ...hover(typeHoverStyles(type)),
    },
    children
  )

Button.displayName = 'Button'
export default Button

const defaultStyles = {
  cursor: 'pointer',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 6,
  paddingLeft: space,
  paddingRight: space,
  transition: 'all 0.1s ease-in-out',
  fontFamily: monospaceFonts,
  fontSize: sizes.default,
  height: doubleSpace,
}

const typeStyles = (type) => {
  switch (type) {
  case 'facebook':
    return {
      color: '#fff',
      backgroundColor: '#0c4c8f',
      borderColor: '#0c4c8f',
    }
  default:
    return {
      color: '#287474',
      backgroundColor: '#18191d',
      borderColor: '#204d4d',
    }
  }
}

const typeHoverStyles = (type) => {
  switch (type) {
  case 'facebook':
    return {
      backgroundColor: '#1058a4',
      borderColor: '#1058a4',
    }
  default:
    return {
      color: '#27b8b8',
      backgroundColor: '#18191d',
      borderColor: '#27b8b8',
    }
  }
}
