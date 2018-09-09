import React from 'react'

import SignInForm from './SignIn'
import SignUpForm from './SignUp'

import userResource from '../../resources/user'

class AuthPage extends React.Component {

  constructor (props) {
    super(props)

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleSignIn (credentials) {
    console.log('Sign In Credentials', credentials)
  }

  handleSignUp (credentials) {
    console.log('Sign Up Credentials', credentials)
  }

  render () {
    return <div>
      <h1>AuthPage Component</h1>
      <SignInForm onSubmit={this.handleSignIn} />
      <SignUpForm onSubmit={this.handleSignUp} />
    </div>
  }
}

export default AuthPage