import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/NavBar'

import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Operation } from '../components/Operation'
import { Modal } from '../components/Modal'
import { getAllCategory, getAllOperations } from '../services/operations'

export const Home = () => {
  const [openCloseModal, setOpenCloseModal] = useState(false)
  const [operations, setOperations] = useState([])
  const [currentOperation, setCurrentOperation] = useState({})
  const [categories, setCategories] = useState([])
  const [income, setIncome] = useState(true)
  const [expense, setExpense] = useState(true)
  const [totalIncome, setTotalIncome ] = useState(0)
  const [totalExpense, setTotalExpense ] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    (async () => {
      const data = await getAllOperations()
      const dataCategory = await getAllCategory()
      setOperations(data)
      setCategories(dataCategory)
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
  }, [operations])
  
  console.log(totalIncome * totalExpense / 100)

  return (
    <>
      {openCloseModal && <Modal setCurrentOperation={setCurrentOperation} currentOperation={currentOperation} operations={operations} setOperations={setOperations} categories={categories} openCloseModal={openCloseModal} setOpenCloseModal={setOpenCloseModal} />}
      <NavBar />
      <div className='flex'>
        <main className='lg:w-2/4 py-8 px-12 m-auto inline-block mt-24 bg-white shadow-xl rounded-lg '>
          <section className='flex justify-evenly items-center'>
            <div className=' w-[260px]'>
              <CircularProgressbar
                value={(totalExpense * 100 / totalIncome).toFixed(1)}
                text={`${(totalExpense * 100 / totalIncome).toFixed(1)}% Spent`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: '#3e98c7',
                  textColor: '#fff',
                  pathColor: '#fff',
                  trailColor: 'transparent',
                  textSize: '8px'
                })}
              />
            </div>
            <div className=' ml-16 '>
              <div className='md:text-2xl'>
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
                <select id="categories" className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ">
                  <option selected="">Choose a Category</option>
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
              {operations.length === 0 && <p>Aun no tienes ninga operacion</p>}
              <ul role='list' >
                {operations.length > 0 && operations.map(operation => (
                  <Operation setCurrentOperation={setCurrentOperation} setOpenCloseModal={setOpenCloseModal} operation={operation} categories={categories} key={operation.id}/>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
