import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import TablePagination from '@material-ui/core/TablePagination'


const styles = theme => ({
  root: {
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

class EmployeeTable extends React.Component {
  static defaultProps = {
    items: [],
    pager: {
      page: 1,
      limit: 10,
      total: 0,
    }
  }

  constructor (props) {
    super(props)

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
  }

  handleRemoveClick (item) {
    if (this.props.onRemove) {
      this.props.onRemove(item)
    }
  }

  handleEditClick (item) {
    if (this.props.onEdit) {
      this.props.onEdit(item)
    }
  }

  handleChangePage (event, page) {
    if (this.props.onChangePage) {
      this.props.onChangePage(page)
    }
  }

  handleChangeRowsPerPage (event) {
    if (this.props.onChangePerPage) {
      const perPage = parseInt(event.target.value, 10)
      this.props.onChangePerPage(perPage)
    }
  }

  render () {
    return <div>
      <Paper className={this.props.classes.root}>
        <Table className={this.props.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Salary ($)</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Contact Info</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.props.items.map(item => {
                return (
                  <TableRow key={item._id}>
                    <TableCell component="th" scope="item">{item.full_name}</TableCell>
                    <TableCell>{item.position}</TableCell>
                    <TableCell>{item.salary}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.contact_info}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => this.handleEditClick(item)}>
                        <EditIcon/>
                      </IconButton>
                      <IconButton onClick={() => this.handleRemoveClick(item)}>
                        <DeleteIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>

      <Paper>
        <TablePagination component="div"
                         count={this.props.pager.total}
                         page={this.props.pager.page}
                         rowsPerPage={this.props.pager.limit}
                         onChangePage={this.handleChangePage}
                         onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  }
}

EmployeeTable.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  pager: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
  onChangePage: PropTypes.func,
  onChangePerPage: PropTypes.func,
}

export default withStyles(styles)(EmployeeTable)