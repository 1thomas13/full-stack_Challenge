const { addOperation, allOperations, deleteOperation } = require("../repositories/operation")

exports.allOperations = async (req, res) => {

  const userId = req.data.id
  const operations = await allOperations(userId)
 
  res.status(200).json({ msg: operations })
}

exports.create = async (req, res) => {

  const { type, amount, description, categoryId} = req.body

  if(!type || !amount || !categoryId) return res.status(400).json({ error: 'complete all fields' })

  const newOperation = {
    type,
    amount,
    description,
    categoryId,
    userId: req.data.id
  }
  console.log(newOperation)
  await addOperation(newOperation)

  res.status(201).json ({ msg: 'operation created successfully' })
}

exports.edit = async (req, res) => {
  res.status(200).json({ msg: 'operation edited successfully' })
}

exports.remove = async (req, res) => {

  const operationId = req.params.id

  await deleteOperation( operationId )

  res.status(200).json({ msg: 'operation deleted successfully' })
}


