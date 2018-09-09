import React from 'react'

class EmployeeUpdatePage extends React.Component {
  render () {
    return <div>
      <h1>EmployeeUpdatePage Sub Component { this.props.match.params.id }</h1>
    </div>
  }
}

export default EmployeeUpdatePage