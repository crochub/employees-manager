import React from 'react'

class SignUpForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      login: '',
      password: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const { name, value} = event.target
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.props.onSubmit) {
      this.props.onSubmit({
        login: this.state.login,
        email: this.state.email,
        password: this.state.password,
      })
    }
  }

  render () {
    return <form onSubmit={this.handleSubmit} noValidate>
      <input name="login" type="text" placeholder="Login" onChange={this.handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={this.handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={this.handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  }
}

export default SignUpForm