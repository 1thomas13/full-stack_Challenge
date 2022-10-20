const { Operation, Category } = require('../database/models/index')

exports.addOperation = async ({ type, amount, description, userId, categoryId }) => {
  return await Operation.create({ type, amount, description, userId, CategoryId: categoryId })
}

exports.allOperations = async (userId) => {
  return await Operation.findAll({
    where: { userId },
    order: [
      ['id', 'DESC']
    ],
    include: [
      {
        model: Category
      }
    ]
  })
}

exports.deleteOperation = async (operationId) => {
  return await Operation.destroy({ where: { id: operationId } })
}

exports.editOperation = async (operation, amount, description, categoryId) => {
  // eslint-disable-next-line no-unused-expressions, no-sequences
  operation.amount = amount || operation.amount,
  operation.description = description || operation.description,
  operation.CategoryId = categoryId || operation.CategoryId
  return await operation.save()
}

exports.findOperation = async (operationId) => {
  return await Operation.findOne({
    where: { id: operationId },
    include: [
      {
        model: Category
      }
    ]
  })
}
