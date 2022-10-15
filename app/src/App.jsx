import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RedirectHome } from './helpers/RedirectHome'
import { RedirectLogin } from './helpers/RedirectLogin'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App () {
  return (
  <>
    <Routes>
      <Route path='/' element={ <RedirectLogin><Home/></RedirectLogin> }/>
      <Route path='/login' element={ <RedirectHome><Login/> </RedirectHome>}/>
      <Route path='/register' element={ <RedirectHome><Register/></RedirectHome> }/>
    </Routes>
  </>
  )
}

export default App
