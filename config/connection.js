// mongoose connection
const mongoose = require('mongoose');

// for heroku deploy
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cooolprojects"

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection;