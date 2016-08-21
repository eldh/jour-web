import {Component, PropTypes, createElement as h} from 'react'
import Box from './Box'
import Overlay from './Overlay'
import Hamburger from './Hamburger'

const SPEED = 200

class OverlayContainer extends Component {
  constructor() {
    super(...arguments)
    this.state = {status: 'CLOSED'}
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  onToggle() {
    if (this.state.status === 'CLOSED') {
      this.handleOpen()
    } else if (this.state.status === 'OPEN') {
      this.handleClose()
    }
  }

  handleClose() {
    this.setState({status: 'CLOSING'})
    setTimeout(() => {
      this.setState({status: 'CLOSED'})
      this.props.onToggle()
    }, SPEED)
  }

  handleOpen() {
    this.setState({status: 'OPENING'})
    setTimeout(() => {
      this.setState({status: 'OPEN'})
    }, 0)
    this.props.onToggle()
  }

  render() {
    const {children, open, onToggle, ...rest} = this.props // eslint-disable-line no-unused-vars
    return h(Box, {...rest},
      h(Hamburger, {onClick: this.onToggle, open}),
      open ? h(Overlay, {style: {
        opacity: this.state.status === 'OPEN' ? 1 : 0,
        transition: 'all 0.2s ease',
      }}, children) : null
    )
  }
}

OverlayContainer.propTypes = {
  open: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
}

OverlayContainer.displayName = 'OverlayContainer'

export default OverlayContainer
