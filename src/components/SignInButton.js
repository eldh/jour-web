import {createElement as h} from 'react'
import Button from './Button'

const SignInButton = ({signIn}) =>
  h(Button, {onClick: signIn, type: 'facebook'}, 'Connect with Facebook')

SignInButton.displayName = 'SignInButton'

export default SignInButton
