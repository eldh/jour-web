import {Component, createElement as h} from 'react'
import {doubleSpace, space} from '../styleConstants'
import Box from './Box'
import Pre from './Pre'
import SignInButton from './SignInButton'

const containerStyles = {
  width: `calc(100vw - ${doubleSpace})`,
  maxWidth: 500,
  margin: '0 auto',
  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
}

const textStyles = {
  textAlign: 'center',
  lineHeight: 2.5,
  marginBottom: space,
}

const welcomeText = `Welcome to Jour.
A minimal online diary.
`
class UserInfo extends Component {
  render() {
    return h(Box, {styles: containerStyles},
      h(Pre, {styles: textStyles}, welcomeText),
      h(SignInButton, this.props)
    )
  }
}

UserInfo.propTypes = {
}

export default UserInfo
