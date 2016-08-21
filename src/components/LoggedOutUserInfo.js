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

const disclaimerStyles = {
  fontSize: 12,
  lineHeight: 1.5,
  textAlign: 'center',
  color: '#64656e',
  marginTop: space,
}

const welcomeText = `Welcome to Jour.
A minimal online diary.`

const disclaimer = `Facebook is only used for authentication.
We won't share anything with anyone.
Your diary is completely private.`

class UserInfo extends Component {
  render() {
    return h(Box, {styles: containerStyles},
      h(Pre, {styles: textStyles}, welcomeText),
      h(SignInButton, this.props),
      h(Pre, {styles: disclaimerStyles}, disclaimer)
    )
  }
}

UserInfo.propTypes = {
}

export default UserInfo
