import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import EmployeeListPage from './EmployeeList'
import EmployeeCreatePage from './EmployeeCreate'
import EmployeeUpdatePage from './EmployeeUpdate'

class EmployeeBasePage extends React.Component {
  render () {
    return <Router>
        <div>
          <h1>EmployeeBasePage Component { this.props.match.url }</h1>
          <ul>
            <li>
              <Link to="/employee">List</Link>
            </li>
            <li>
              <Link to="/employee/create">Create</Link>
            </li>
            <li>
              <Link to={{ pathname: '/employee/update/7' }}>Update</Link>
            </li>
          </ul>

          <Route exact path={this.props.match.url} component={EmployeeListPage} />
          <Route path={`${this.props.match.url}/create`} component={EmployeeCreatePage} />
          <Route path={`${this.props.match.url}/update/:id`} component={EmployeeUpdatePage} />
        </div>
      </Router>
  }
}

export default EmployeeBasePage