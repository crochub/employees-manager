const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/employees-manger', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', err => {
  console.error('MongoDB connection failed!')
  console.error(err)
})

db.once('open', function() {
  console.info('MongoDB connection established successfully!')
});

module.exports = db