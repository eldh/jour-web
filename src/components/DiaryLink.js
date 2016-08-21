import {PropTypes, createElement as h} from 'react'
import {getShortHumanDateString} from '../date'
import {style} from 'glamor'
import {headingColor} from '../styleConstants'

const textStyles = {
  lineHeight: 1.5,
  paddingBottom: '1em',
  cursor: 'pointer',
  color: headingColor,
}

const DiaryLink = ({date, onClick}) => {
  return h('div',
    {...style(textStyles), onClick, 'aria-role': 'button'},
    getShortHumanDateString(date)
  )
}

DiaryLink.propTypes = {
  diary: PropTypes.object,
  date: PropTypes.string,
  onClick: PropTypes.func,
}

export default DiaryLink
