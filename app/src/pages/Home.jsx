/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { TbLogout } from 'react-icons/tb'
import 'react-circular-progressbar/dist/styles.css'
import { Operation } from '../components/Operation'
import { Modal } from '../components/Modal'
import { getAllCategory, getAllOperations } from '../services/operations'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [openCloseModal, setOpenCloseModal] = useState(false)
  const [operations, setOperations] = useState([])
  const [currentOperation, setCurrentOperation] = useState({})
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [income, setIncome] = useState(true)
  const [expense, setExpense] = useState(true)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)
  const [total, setTotal] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [operationsFilters, setOperationsFilters] = useState([])
  const [colorProgressBar, setColorProgressBar] = useState('#3e98c7')

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllOperations()
        const dataCategory = await getAllCategory()
        setOperations(data)
        setOperationsFilters(data)
        setCategories(dataCategory)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    let income = 0
    let expense = 0

    for (const operation of operations) {
      if (operation.type === 'income') income = income + operation.amount
      if (operation.type === 'expense') expense = expense + operation.amount
    }

    setTotalIncome(income)
    setTotalExpense(expense)
    setTotal(income - expense)

    if (income === 0) setRemaining(expense)
    else setRemaining((expense * 100 / income).toFixed(1))

    remaining > 100 ? setColorProgressBar('#ee7d7d') : setColorProgressBar('#3e98c7')
  }, [operations])

  useEffect(() => {
    setOperationsFilters(operations)
    let operationsFiltered

    if (!income || !expense) {
      operationsFiltered = operations.filter(operation => {
        if (income) return income && operation.type === 'income'
        if (expense) return expense && operation.type === 'expense'
      })
      console.log(selectedCategory)
      if (selectedCategory !== '') operationsFiltered = operationsFiltered.filter(operation => (operation.CategoryId == selectedCategory))
      setOperationsFilters(operationsFiltered)
    }
    if (income && expense) {
      if (selectedCategory !== '') operationsFiltered = operations.filter(operation => (operation.CategoryId == selectedCategory))
      setOperationsFilters(operationsFiltered || operations)
    }
  }, [income, expense, selectedCategory, operations])

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <>
      {openCloseModal && <Modal setOperationsFilters={setOperationsFilters} setCurrentOperation={setCurrentOperation} currentOperation={currentOperation} operations={operations} setOperations={setOperations} categories={categories} openCloseModal={openCloseModal} setOpenCloseModal={setOpenCloseModal} />}
      <div className='flex'>
        <main className='lg:w-2/4 pt-4 pb-8 px-12 m-auto inline-block mt-12 md:mt-24 bg-white shadow-xl rounded-lg '>
          <button className='text-2xl float-right' onClick={logout}><TbLogout /></button>
          <section className='md:flex block justify-evenly items-center'>
            <div className='w-[260px] m-auto'>
              <CircularProgressbar
                value={remaining}
                text={`${remaining}${totalIncome === 0 ? '$ ' : '% '}Spent `}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: colorProgressBar,
                  textColor: '#fff',
                  pathColor: '#fff',
                  trailColor: 'transparent',
                  textSize: '8px'
                })}
              />
            </div>
            <div className='md:ml-16 m-auto text-center'>
              <div className='text-xl md:text-2xl'>
                <h2 className='text-gray-500 font-bold m-2'>Income: <span className='text-blue-600'>${totalIncome}</span></h2>
                <h2 className='text-gray-500 font-bold m-2'>Expenses: <span className='text-red-600'>${totalExpense}</span></h2>
                <h2 className='text-gray-500 font-bold m-2'>Total: <span className='text-red-600'>${total}</span></h2>
              </div>
            </div>
          </section>
          <section className='m-auto mt-8'>
            <div className='flex justify-between items-center'>
              <h5 className='text-xl font-bold leading-none text-gray-900 '>
                Operations
              </h5>
              <button onClick={() => setOpenCloseModal(!openCloseModal)} className='bg-[#3e98c7] rounded-full text-white w-12 h-12'>
                +
              </button>
            </div>
            <div>
              <form className='flex justify-center items-center my-4'>
                <select value={selectedCategory} onChange={({ target }) => (setSelectedCategory(target.value))} id="categories" className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ">
                  <option value={''} >All categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.category}</option>
                  ))}
                </select>
                <input defaultChecked={income} onChange={() => setIncome(!income)} id="default-checkbox" type="checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 " />
                <label htmlFor="default-checkbox" className="  font-medium text-gray-900 ml-1">Income</label>
                <input defaultChecked={expense} onChange={() => setExpense(!expense)} id="default-checkbox" type="checkbox" className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 " />
                <label htmlFor="default-checkbox" className="  font-medium text-gray-900 ml-1">Expense</label>
              </form>
            </div>
            <div >
              {operationsFilters?.length === 0 && <p>Aun no tienes ninguna operacion</p>}
              <ul role='list' >
                {operationsFilters?.length > 0 && operationsFilters.map(operation => (
                  <Operation setOperationsFilters={setOperationsFilters} operations={operations} setOperations={setOperations} setCurrentOperation={setCurrentOperation} setOpenCloseModal={setOpenCloseModal} operation={operation} categories={categories} key={operation.id}/>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
