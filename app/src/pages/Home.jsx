import React from 'react'

export const Home = () => {
  return (
    <div>
      <div className="w-screen h-72 bg-gradient-to-t from-green-400 to-blue-500"></div>
      <main className=" p-12 m-12 relative bg-slate-200 shadow-xl -top-48 ">
        <section className="flex justify-between ">
          <div>
            <h2>Income</h2>
            <h4 className="text-blue-600">$400</h4>
            <div>
              <h2>Total</h2>
              <h4 className="text-black">$400</h4>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h2>Expenses</h2>
              <h4 className="text-red-600">$400</h4>
            </div>
            <div>
              <p>Grafico</p>
            </div>
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
