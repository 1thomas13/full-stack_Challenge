import React from 'react'

// eslint-disable-next-line react/prop-types
export const Modal = ({ setOpenCloseModal, openCloseModal }) => {
  return (
    <div className='bg-[#2226] flex justify-center content-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'>
      <div className=' relative p-4 w-full max-w-2xl h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow'>
          <div className='flex justify-between items-start p-4 rounded-t border-b '>
            <h3 className='text-xl font-semibold text-gray-900 '>
              Crear Operacion
            </h3>
            <button onClick={() => setOpenCloseModal(!openCloseModal)} type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center' data-modal-toggle='defaultModal'>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <form className='space-y-6 w-72 p-6 inline' onSubmit={console.log('a')}>
            <div className='px-24'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='name@gmail.com'
              />
            </div>
            <div>
            </div>
          </form>
          <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200'>
            <button onClick={() => setOpenCloseModal(!openCloseModal)} data-modal-toggle='defaultModal' type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '>I accept</button>
            <button onClick={() => setOpenCloseModal(!openCloseModal)} data-modal-toggle='defaultModal' type='button' className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 '>Decline</button>
          </div>
        </div>
      </div>
    </div>
  )
}
