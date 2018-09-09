const jwt = require('jsonwebtoken')

const TOKEN_SECRET_KEY = 'dev'

class AuthService {
  generateToken (data) {
    return new Promise((resolve, reject) => {
      jwt.sign(data, TOKEN_SECRET_KEY, function (err, token) {
        if (err) {
          reject(err)
        } else {
          resolve(token)
        }
      })
    })
  }

  verifyToken (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, TOKEN_SECRET_KEY, function (err, payload) {
        if (err) {
          reject(err)
        } else {
          resolve(payload)
        }
      })
    })
  }
}

module.exports = new AuthService()