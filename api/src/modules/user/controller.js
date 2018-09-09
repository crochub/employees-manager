const HTTP_STATUS = require('http-status')

const authService = require('../../services/auth')
const UserModel = require('./model')
const UserError = require('./error')

class UserController {
  async register (data) {
    const {login, email} = data

    const existingUser = await UserModel.findOne().or([{ login }, { email }])

    if (existingUser) {
      if (existingUser.login === login) {
        throw new UserError(`User with login \'${login}\' is registered already.`, HTTP_STATUS.BAD_REQUEST)
      } else {
        throw new UserError(`User with email \'${email}\' is registered already.`, HTTP_STATUS.BAD_REQUEST)
      }
    }

    const user = new UserModel(data)
    await user.save()

    const payload = {
      _id: user._id,
      email: user.email,
      full_name: user.full_name,
    }
    const token = await authService.generateToken(payload)

    return { user, token }
  }

  async singIn (login, password) {
    if (!login) {
      throw new UserError(`Path \'login\' is required.`, HTTP_STATUS.BAD_REQUEST)
    }

    if (!password) {
      throw new UserError(`Path \'password\' is required.`, HTTP_STATUS.BAD_REQUEST)
    }

    const user = await UserModel.findOne({ login })

    if (!user) {
      throw new UserError(`User with login \'${login}\' is not found.`, HTTP_STATUS.BAD_REQUEST)
    }

    if (!user.verifyPassword(password)) {
      throw new UserError(`User password is incorrect.`, HTTP_STATUS.BAD_REQUEST)
    }

    const payload = {
      _id: user._id,
      email: user.email,
    }
    const token = await authService.generateToken(payload)

    return { user, token }
  }
}

module.exports = new UserController()

