import {createElement as h} from 'react'

const Heading = ({type, children, ...rest}) =>
  h(`h${type}`, {...rest}, children)

Heading.displayName = 'Heading'
export default Heading
