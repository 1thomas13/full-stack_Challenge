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

export const Operation = () => {
  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction onClick={() => console.log('edit')}>
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
        <SwipeAction onClick={() => console.log('destr')}>
          <div className='bg-[#5ea8d7] flex rounded items-center pr-8 text-white'>
            <FiEdit className='text-3xl ' />
          </div>
        </SwipeAction>
      </TrailingActions>
    )
  }

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
                Neil Sims <span className='text-xs text-gray-500'>12/3/23</span>
              </p>
              <p className='text-md text-gray-500 truncate '>
                email@windster.com
              </p>
            </div>
            <div className=' items-center text-base font-semibold text-gray-900 '>
              - $320
              <p className='text-sm text-center'>income</p>
            </div>
          </div>
        </li>
      </SwipeableListItem>
    </SwipeableList>

  )
}
