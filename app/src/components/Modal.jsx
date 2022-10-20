/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { createOperation, editOperation } from '../services/operations'

// eslint-disable-next-line react/prop-types
export const Modal = ({ setOperationsFilters, setOpenCloseModal, openCloseModal, categories, operations, setOperations, currentOperation, setCurrentOperation }) => {
  const [categoryId, setCategoryId] = useState(currentOperation?.categoryId ?? '')
  const [type, setType] = useState(currentOperation?.type ?? 'income')
  const [amount, setAmount] = useState(currentOperation?.amount || '')
  const [description, setDescription] = useState(currentOperation?.description ?? '')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      if (!type || !categoryId || !amount) return setError('Complete the fields')

      if (currentOperation.id) {
        const currentOperations = operations.filter(operation => currentOperation.id !== operation.id)
        const { operation, msg } = await editOperation(categoryId, amount, description, currentOperation.id)
        console.log(operation, msg)
        setOperations([operation, ...currentOperations])
        setOperationsFilters(operations)
      } else {
        const { operation } = await createOperation(categoryId, type, amount, description)
        setOperations([operation, ...operations])
        setOperationsFilters(operations)
      }
      setOpenCloseModal(!openCloseModal)
      setCurrentOperation({})
    } catch (error) {
      console.log(error.toString())
      setError(error.toString())
    }
  }

  const closeResetModal = () => {
    setOpenCloseModal()
    setCurrentOperation({})
  }

  return (
    <div className='bg-[#2226] flex justify-center content-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-screen '>
      <div className=' relative p-4 w-full max-w-2xl h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow'>
          <div className='flex justify-between items-start p-4 rounded-t border-b '>
            <h3 className='text-xl font-semibold text-gray-900 '>
              Crear Operacion
            </h3>
            <button onClick={closeResetModal}
              type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center' data-modal-toggle='defaultModal'
            >
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <form className='space-y-6 w-72 p-6 inline' onSubmit={handleSubmit}>
            <div className='px-24'>
              <label
                htmlFor='concept'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Concept
              </label>
              <input
                type='text'
                name='concept'
                id='concept'
                className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='concept'
                value={description}
                onChange={({ target }) => { setDescription(target.value) } }
              />
            </div>
            <div className='px-24'>
              <label
                htmlFor='amount'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Amount
              </label>
              <input
                type='number'
                name='amount'
                id='amount'
                className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='100.00$'
                value={amount}
                onChange={({ target }) => { setAmount(target.value) } }
              />
            </div>
            <div className='px-24'>
              <label
                  htmlFor='category'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                Category
              </label>
            <select id='category' value={categoryId} onChange={({ target }) => { setCategoryId(target.value) } } className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' >
              <option defaultValue={''}>Choose a Category</option>
              {
                categories && categories.length && categories.map(category => (
                  <option key={category.id} value={category.id}>{category.category}</option>
                ))
              }
            </select>
            </div>
            <div className='px-24'>
              <label
                  htmlFor='type'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                type
              </label>
              <select disabled={currentOperation.id && true} id='type' value={type} onChange={({ target }) => { setType(target.value) } } className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' >
                <option defaultValue={'income'}>Income</option>
                <option value={'expense'}>Expense</option>
              </select>
            </div>
            {error && <p className='text-red-500 text-center'>{error}</p>}
            <div className=' flex items-center p-6 space-x-2 rounded-b border-t border-gray-200'>
              <div className='m-auto'>
                <button type='submit' data-modal-toggle='defaultModal' className='text-white bg-[#3e98c7] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>I accept</button>
                <button onClick={closeResetModal}
                  data-modal-toggle='defaultModal' type='button' className='ml-4 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 '
                >
                  Decline
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
