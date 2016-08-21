import {createElement as h} from 'react'
import Box from './Box'
// import {focusBorderColor} from '../styleConstants'
const getRotation = (i, open) => open ? i * 45 : 0

const Hamburger = ({onClick, open}) =>
  h(Box, {
    onClick,
    style: {
      cursor: 'pointer',
      height: 24,
      width: 24,
      zIndex: 10,
    },
  },
    [-1, 1].map((i) => h(Box, {
      key: `${i}`,
      style: {
        transform: `rotate(${getRotation(i, open)}deg)`,
        transformOrigin: '50% 50%',
        opacity: 1,
        transition: `transform .3s cubic-bezier(.23,1,.32,1) ${open ? 0.3 : 0}s,` +
          `top .3s cubic-bezier(.23,1,.32,1) ${open ? 0 : 0.3}s`,
        margin: '2px 0',
        borderRadius: 2,
        width: 24,
        top: open ? 7 : i === -1 ? 3 : 15,
        height: 2,
        left: 0,
        position: 'absolute',
        backgroundColor: '#287474',

      },
    })
  )
)

Hamburger.displayName = 'Hamburger'
export default Hamburger
