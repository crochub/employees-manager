import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

class EmployeeForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fullName: '',
      position: '',
      salary: 0,
      gender: 'male',
      contactInfo: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    let { name, value } = event.target

    if (name === 'salary') {
      value = parseInt(value, 10)
    }

    this.setState(state => ({
      ...state,
      [name]: value,
    }))
  }

  handleSubmit (event) {
    event.preventDefault()
  }

  render () {
    return <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
      <TextField
        name="fullName"
        label="Full Name"
        fullWidth
        margin="normal"
        value={this.state.fullName}
        onChange={this.handleChange}
      />
      <TextField
        name="position"
        label="Position"
        fullWidth
        margin="normal"
        value={this.state.position}
        onChange={this.handleChange}
      />
      <TextField
        name="salary"
        type="number"
        label="Salary"
        fullWidth
        margin="normal"
        value={this.state.salary}
        onChange={this.handleChange}
      />
      <TextField
        name="gender"
        select
        label="Gender"
        fullWidth
        margin="normal"
        value={this.state.gender}
        onChange={this.handleChange}
      >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
      </TextField>
      <TextField
        name="contactInfo"
        label="Contact Info"
        multiline
        rows="2"
        fullWidth
        margin="normal"
        required
        value={this.state.contactInfo}
        onChange={this.handleChange}
      />
      <Button type="submit" variant="outlined" color="primary" size="large">
        Create
      </Button>
    </form>
  }
}

export default EmployeeForm