const { Category } = require('../database/models')
const { addOperation, allOperations, deleteOperation, findOperation, editOperation } = require('../repositories/operation')

exports.allOperations = async (req, res) => {
  const userId = req.data.id
  const operations = await allOperations(userId)

  res.status(200).json({ msg: operations })
}

exports.create = async (req, res) => {
  const { type, amount, description, categoryId } = req.body

  if (!type || !amount || !categoryId) return res.status(400).json({ error: 'complete all fields' })

  const newOperation = {
    type,
    amount,
    description,
    categoryId,
    userId: req.data.id
  }
  const categoryExist = await Category.findByPk(categoryId)

  if (!categoryExist) return res.status(400).json({ error: 'category not exist' })

  let operation = await addOperation(newOperation)

  operation = await findOperation(operation.id)

  res.status(201).json({ msg: 'operation created successfully', operation })
}

exports.edit = async (req, res) => {
  const { amount, description, categoryId } = req.body
  const operationId = req.params.id

  const operationExist = await findOperation(operationId)
  if (!operationExist) return res.status(400).json({ error: 'The operation not exist' })

  await editOperation(operationExist, amount, description, categoryId)
  const operation = await findOperation(operationId)

  res.status(200).json({ msg: 'operation edited successfully', operation })
}

exports.remove = async (req, res) => {
  const operationId = req.params.id

  const operationExist = await findOperation(operationId)
  if (!operationExist) return res.status(400).json({ error: 'The operation not exist' })

  await deleteOperation(operationId)

  res.status(200).json({ msg: 'operation deleted successfully' })
}
