import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='bg-blue-500 w-screen items-center text-white'>
      <ul className='w-screen flex items-center'>
        <li>
          Welcome Username
        </li>
        <li>
          <Link to={'/login'}>
            Logout
          </Link>
        </li>
        
      </ul>
    </div>
  )
}
