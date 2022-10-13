const { Operation } = require("../database/models/index")

exports.addOperation = async({ type, amount, description, userId, categoryId }) => {
  await Operation.create({type, amount, userId, description, categoryId})
}

exports.allOperations = async( userId ) => {
 return await Operation.findAll({ where: { userId: userId }})
}

exports.deleteOperation = async( operationId ) => {
  return await Operation.destroy({ where: { id: operationId }})
}

exports.editOperation = async( userId ) => {
  return await Operation.findAll({ where: { userId: userId }})
 }