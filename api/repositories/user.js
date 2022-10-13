const { User } = require('../database/models/index')

exports.createUser = async ( {username, password, email} ) => {
  await User.create({ username, password, email })
}

exports.findUser = async ( username ) => {
 return await User.findOne({ where: { username } } )
}