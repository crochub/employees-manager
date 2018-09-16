import httpAPI from '../../providers/api'

class EmployeeResource {
  constructor () {
    this.http = httpAPI
  }

  getList (search, pager = {}) {
    const { page, limit } = pager
    const params = {
      ...(search && {search}),
      ...(page && {page: page + 1}),
      ...(limit && {limit}),
    }

    return this.http.get('/employee', { params }).then(res => res.data)
  }

  remove (id) {
    return this.http.delete(`/employee/${id}`).then(res => res.data)
  }
}

export default new EmployeeResource()