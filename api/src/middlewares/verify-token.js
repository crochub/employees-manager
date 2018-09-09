const HTTP_STATUS_CODE = require('http-status')

const BaseError = require('../util/base-error')
const authService = require('../services/auth')

class AuthError extends BaseError {
  constructor (message, statusCode) {
    super(...arguments)
  }
}

async function verifyToken (ctx, next) {
  if (ctx.request.originalUrl.startsWith('/api/user')) {
    return next()
  }

  try {
    const token = ctx.request.header['X-Auth-Token']

    if (!token) {
      throw new AuthError('Auth token header \'X-Auth-Token\' is missed.', HTTP_STATUS_CODE.UNAUTHORIZED)
    }

    const payload = await authService.verifyToken(token)
    ctx.request.user = payload

    await next()
  } catch (err) {
    console.error(err)

    if (err instanceof AuthError) {
      throw err
    } else {
      throw new AuthError('Auth token is incorrect.', HTTP_STATUS_CODE.UNAUTHORIZED)
    }
  }
}

module.exports = () => verifyToken