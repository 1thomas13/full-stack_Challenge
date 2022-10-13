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

exports.editOperation = async( operation, amount, description, categoryId ) => {
  operation.amount = amount || operation.amount,
  operation.description = description || operation.description,
  operation.categoryId = categoryId || operation.categoryId,
  
  await operation.save()
}

exports.findOperation = async( operationId ) => {
  return await Operation.findOne({ where: { id: operationId }})
}