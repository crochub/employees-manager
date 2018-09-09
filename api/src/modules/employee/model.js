const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

mongoosePaginate.paginate.options = {
  lean:  true,
  limit: 10,
}

const schema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  contact_info: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    min: 0,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
})

schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret['__v']
  }
})

schema.plugin(mongoosePaginate)

module.exports = mongoose.model('Employee', schema)