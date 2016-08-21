import {Component, PropTypes, createElement as h} from 'react'
import Box from './Box'

const indicatorStyles = {
  width: 6,
  height: 6,
  borderRadius: '50%',
  transition: 'all 0.4s ease',
}
const wrapperStyles = {
  flexDirection: 'row',
  alignItems: 'center',
}
const colors = {
  SAVED: '#2b9532',
  SAVING: '#a38e1c',
  CHANGED: '#4a4a4a',
  ERROR: '#771c1c',
}
const statuses = {
  SAVED: 'Your post has been saved',
  SAVING: 'Saving',
  CHANGED: 'Saving',
  ERROR: 'Your post will be saved as soon as possible.',
}

class SaveIndicator extends Component {
  constructor() {
    super(...arguments)
    this.state = {hover: false}
  }

  render() {
    const {post} = this.props
    return h(Box, {
      styles: wrapperStyles,
      onMouseEnter: () => { this.setState({hover: true}) },
      onMouseLeave: () => { this.setState({hover: false}) },
    },
      h(Box,
        {styles: {...indicatorStyles, backgroundColor: colors[post.status] || colors.CHANGED}}
      ),
      h(Box, {styles: {
        marginLeft: '0.5em',
        opacity: this.state.hover ? 1 : 0,
        transition: 'all 0.2s ease',
      }}, statuses[post.status])
    )
  }
}
SaveIndicator.propTypes = {
  post: PropTypes.object,
}

export default SaveIndicator
