import {createElement as h} from 'react'
import {style, focus, add} from 'glamor'
import {borderRadius, backgroundColor, sizes, monospaceFonts} from '../styleConstants'

const placeholder = (x) => ({
  ...add(':placeholder', x),
  ...add(':-webkit-input-placeholder', x),
  ...add(':-moz-placeholder', x),
  ...add(':-ms-input-placeholder', x),
})

const defaultStyles = {
  position: 'relative',
  borderColor: 'transparent',
  borderRadius,
  fontFamily: monospaceFonts,
  fontSize: sizes.default,
  color: 'inherit',
  backgroundColor,
  flexGrow: 1,
  lineHeight: 1.5,
  resize: 'none',
  borderWidth: 0,
  padding: 0,
}

const Textarea = ({children, onChange, ...props}) =>
  h('textarea', {
    onChange,
    ...style(defaultStyles),
    ...focus({outline: 'none', borderColor: 'transparent'}),
    ...placeholder({color: '#3c3c3e'}),
    autoComplete: 'off',
    ...props,
  })

Textarea.displayName = 'Textarea'
export default Textarea
