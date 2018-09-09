const HTTP_STATUS_CODE = require('http-status')

// Mongoose validation error name
const  VALIDATION_ERROR_NAME = 'ValidationError'

function handleValidationError (err) {
  return {
    statusCode: HTTP_STATUS_CODE.BAD_REQUEST,
    message: Object.keys(err.errors).map(key => err.errors[key].message)
  }
}

async function errorHandler (ctx, next) {
  try {
    await next()
  } catch (err) {
    console.error(err)

    const error = err.name === VALIDATION_ERROR_NAME ? handleValidationError(err) : err

    ctx.status = error.statusCode || 500
    ctx.body = {
      message: error.message
    }
  }
}

module.exports = () => errorHandler