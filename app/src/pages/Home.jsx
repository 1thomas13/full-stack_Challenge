import React from 'react'
import { NavBar } from '../components/NavBar'

export const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className="w-screen h-72 bg-gradient-to-t from-green-400 to-blue-500"></div>
      <main className=" p-12 m-auto w-2/3 relative bg-slate-200 shadow-xl -top-48 ">
        <section className="w-full justify-between ">
          <div className='flex justify-between items-center'>
            <div>
              <h2>Income</h2>
              <h4 className="text-blue-600">$400</h4>
            </div>
            <div>
              <h2>Total</h2>
              <h4 className="text-black">$400</h4>
            </div>
            <div>
              <h2>Expenses</h2>
              <h4 className="text-red-600">$400</h4>
            </div>
          </div>
          <div className='m-auto'>
            <p className='m-auto'>Grafico</p>
          </div>
        </section>
        <section className="border-2 border-gray-800">
          lista
          <div>
            <div className="flex justify-between">
              icono
              <div>
                text
                <p>categoria</p>
              </div>
              <div>
                <h4>$3400</h4>+ $3400
              </div>
            </div>
            <br />
          </div>
        </section>
      </main>
    </div>
  )
}
