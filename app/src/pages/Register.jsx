import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/auth'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()

      if (!email && !username && !password && !repeatPassword) return setError('Complete all fields')
      if (password.length < 6) return setError('Password must be at least 6 characters')
      if (password !== repeatPassword) return setError('The passwords do not match')

      setError(null)
      const token = await register(email, username, password)
      localStorage.setItem('token', token)
      return navigate('/')
    } catch (error) {
      setError(error.toString())
    }
  }

  return (
    <div className='h-screen w-screen flex content-center items-center'>
      <div className='p-4 max-w-sm w-full m-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8'>
        <form className='space-y-6 ' onSubmit={handleSubmit}>
          <h5 className='text-xl font-medium text-gray-900 '>
            Register in to our platform
          </h5>
          <div>
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
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='name@gmail.com'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div>
            <label
              htmlFor='username'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your username
            </label>
            <input
              type='text'
              name='username'
              id='username'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='username'
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Your password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div>
            <label
              htmlFor='repeatPassword'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Confirm password
            </label>
            <input
              type='password'
              name='repeatPassword'
              id='repeatPassword'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
              placeholder='••••••••'
              value={repeatPassword}
              onChange={({ target }) => setRepeatPassword(target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
          >
            Register
          </button>
          <p className='text-red-500 text-center'>
            {error && <>{error}</>}
          </p>
          <div className='text-sm font-medium text-gray-500 '>
            You have a account?{' '}
            <Link to='/login' className='text-blue-700 hover:underline'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
