import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AuthPage from './pages/auth/Auth'
import EmployeeBasePage from './pages/employee/Employee'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/auth">Auth Page</Link>
            </li>
            <li>
              <Link to="/employee">Employee Page</Link>
            </li>
          </ul>

          <hr />

          <Route path="/employee" component={EmployeeBasePage} />
          <Route path="/auth" component={AuthPage} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App)