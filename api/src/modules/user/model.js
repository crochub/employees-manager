const crypto = require('crypto')
const uuidV1 = require('uuid/v1')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  salt: String,
  login: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})

schema.pre('save', function (next) {
  this.salt = uuidV1()
  this.password = this.encryptPassword(this.password)
  next()
})

schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret['__v']
    delete ret['password']
    delete ret['salt']
  }
})

schema.methods.encryptPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
}

schema.methods.verifyPassword = function (password) {
  return this.password === this.encryptPassword(password)
}

module.exports = mongoose.model('User', schema)