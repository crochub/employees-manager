const EmployeeModel = require('./model')

class EmployeeController {
  create (ownerId, data) { return EmployeeModel.create({ owner_id: ownerId, ...data}) }

  remove (id) { return EmployeeModel.findOneAndDelete(id) }

  update (id, data) { return EmployeeModel.findOneAndUpdate(id, data, { new: true }) }

  getList (ownerId, search, pagerOptions = {}) {
    const { page = 0, limit = 0 } = pagerOptions
    const pager = {
      ...(page && { page }),
      ...(limit && { limit }),
    }

    const query = EmployeeModel.where('owner_id', ownerId)

    if (search && typeof search === 'string') {
      const regexp = new RegExp(search, 'ig')

      query.or([
        { full_name: regexp },
        { contact_info: regexp },
        { position: regexp },
      ])
    }

    return EmployeeModel.paginate(query, pager)
  }
}

module.exports = new EmployeeController()