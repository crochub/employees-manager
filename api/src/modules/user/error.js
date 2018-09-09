const BaseError = require('../../util/base-error')

class UserError extends BaseError {
  constructor (message, statusCode) {
    super(...arguments)
  }
}

module.exports = UserError
