import {createElement as h} from 'react'
import {style, focus, add} from 'glamor'
import {borderRadius, backgroundColor, sizes, monospaceFonts, space} from '../styleConstants'
import ContentEditable from './ContentEditable'

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
  marginBottom: space,
}

const Textarea = ({children, onChange, ...rest}) =>
  h(ContentEditable, {
    onChange,
    ...style(defaultStyles),
    ...focus({outline: 'none', borderColor: 'transparent'}),
    ...placeholder({color: '#3c3c3e'}),
    autoComplete: 'off',
    ...rest,
  })

Textarea.displayName = 'Textarea'
export default Textarea
