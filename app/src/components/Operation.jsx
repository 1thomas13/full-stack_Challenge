/* eslint-disable react/prop-types */
import React from 'react'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { BsTrash } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { removeOperation } from '../services/operations'

export const Operation = ({ operation, categories, setOpenCloseModal, setCurrentOperation }) => {
  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction onClick={() => removeOperation(operation.id)} destructive={true}>
          <div className='bg-red-300 flex rounded items-center pl-8 text-white'>
            <BsTrash className='text-3xl ' />
          </div>
        </SwipeAction>
      </LeadingActions>
    )
  }

  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction onClick={() => {
          setOpenCloseModal(true)
          setCurrentOperation({
            id: operation.id,
            categoryId: operation.categoryId,
            description: operation.description,
            amount: operation.amount,
            type: operation.type
          })
        }}
      >
        <div className='bg-[#5ea8d7] flex rounded items-center pr-8 text-white'>
          <FiEdit className='text-3xl ' />
        </div>
      </SwipeAction>
      </TrailingActions >
    )
  }

  // eslint-disable-next-line react/prop-types
  const { categoryId, description, amount, type, createdAt } = operation

  return (

    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <li className='w-full border-b m-auto p-2  cursor-grab active:cursor-grabbing'>
          <div className='flex items-center space-x-4'>
            <div className='flex-shrink-0'>
              <img
                className='w-16 h-16 rounded-full'
                src='https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_960_720.png'
                alt='Neil image'
              />
            </div>
            <div className='flex-1 min-w-0'>
              <p className='text-lg font-medium text-gray-900 truncate '>
                {categories.find((category) => categoryId === category.id).category} <span className='text-xs text-gray-500'>{createdAt.substring(0, 10)}</span>
              </p>
              <p className='text-md text-gray-500 truncate '>
                {description}
              </p>
            </div>
            <div className=' items-center text-base font-semibold text-gray-900 '>
              - ${amount}
              <p className={`text-sm text-center ${type === 'expense' ? 'text-red-500' : 'text-blue-200'} `}>
                {type}
              </p>
            </div>
          </div>
        </li>
      </SwipeableListItem>
    </SwipeableList>

  )
}
