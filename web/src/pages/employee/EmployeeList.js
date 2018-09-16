import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import { getEmployeesList, removeEmployee } from './store/actions'

import EmployeeTable from './EmployeeTable'

class EmployeeListPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      redirectToCreate: false,
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangePerPage = this.handleChangePerPage.bind(this)
    this.handleCreateClick = this.handleCreateClick.bind(this)
  }

  componentDidMount () {
    const pager = {
      page: 0,
      limit: 10,
    }

    this.props.getList('', pager)
  }

  handleEdit (employee) {
    console.log('handleEdit', employee)
  }

  handleRemove (employee) {
    this.props.remove(employee._id)
  }

  handleChangePage (page) {
    const pager = {
      page: page,
      limit: this.props.pager.limit,
    }

    this.props.getList('', pager)
  }

  handleChangePerPage (perPage) {
    const pager = {
      page: this.props.pager.page,
      limit: perPage,
    }

    this.props.getList('', pager)
  }

  handleCreateClick () {
    this.setState(state => ({ ...state, redirectToCreate: true }))
  }

  render () {
    if (this.state.redirectToCreate) {
      return <Redirect push to="/employee/create"/>
    }

    return <div>
      <Paper>
        <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleCreateClick}>
          <AddIcon />
        </Button>
      </Paper>
      <EmployeeTable items={this.props.employees}
                     pager={this.props.pager}
                     onEdit={this.handleEdit}
                     onRemove={this.handleRemove}
                     onChangePage={this.handleChangePage}
                     onChangePerPage={this.handleChangePerPage}
      />
    </div>
  }
}

const mapStateToProps = state => ({
  employees: state.employees.items,
  pager: state.employees.pager,
})

const mapDispatchToProps = dispatch => ({
  getList: (search, pager) => { dispatch(getEmployeesList(search, pager)) },
  remove: (id) => { dispatch(removeEmployee(id)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListPage)