const { User } = require('../database/models/index')

exports.createUser = async ( {username, password} ) => {
  await User.create({ username, password })
}

exports.findUser = async ( username ) => {
 return await User.findOne({ where: { username } } )
}