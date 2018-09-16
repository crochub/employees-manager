import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signIn, signUp  } from './store/actions'

import SignInForm from './SignIn'
import SignUpForm from './SignUp'

class AuthPage extends React.Component {
  constructor (props) {
    super(props)

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleSignIn (credentials) {
    console.log('Sign In Credentials', credentials)
    this.props.signIn(credentials)
  }

  handleSignUp (credentials) {
    console.log('Sign Up Credentials', credentials)
    this.props.signUp(credentials)
  }

  render () {
    if (this.props.authToken) {
      const { from } = this.props.location.state || { from: { pathname: '/employee' } }
      return <Redirect to={from}/>
    }

    return <div>
      <h1>AuthPage Component</h1>
      <SignInForm onSubmit={this.handleSignIn} />
      <SignUpForm onSubmit={this.handleSignUp} />
    </div>
  }
}

const mapStateToProps = state => ({
  authToken: state.user.token,
})

const mapDispatchToProps = dispatch => ({
  signIn: params => { dispatch(signIn(params)) },
  signUp: params => { dispatch(signUp(params)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)