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
    const token = ctx.request.header['x-auth-token']

    if (!token) {
      throw new AuthError('Auth token header \'X-Auth-Token\' is missed.', HTTP_STATUS_CODE.UNAUTHORIZED)
    }

    ctx.request.user = await authService.verifyToken(token)

    await next()
  } catch (err) {
    console.error(err)

    if (err instanceof AuthError) {
      throw new AuthError('Auth token is incorrect.', HTTP_STATUS_CODE.UNAUTHORIZED)
    } else {
      throw err
    }
  }
}

module.exports = () => verifyToken