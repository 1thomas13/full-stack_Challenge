const { User } = require('../database/models/index')

exports.createUser = async() => {
  await User.create(newUser)
}
