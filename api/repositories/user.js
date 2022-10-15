const { User } = require('../database/models/index')

exports.createUser = async ({ username, password, email }) => {
  return await User.create({ username, password, email })
}

exports.findUser = async (email) => {
  return await User.findOne({ where: { email } })
}
