import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='bg-blue-500 text-white'>
      <ul className='w-full flex items-center'>
        <li>
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/login'}>
            Login
          </Link>
        </li>
        <li>
          <Link to={'/register'}>
            Register
          </Link>
        </li>
      </ul>
    </div>
  )
}
