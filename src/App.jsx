import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  

  return (
    <>
      <header>
          Raamtaro Messenger
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Raamtaro Inc.
      </footer>
      
    </>
  )
}

export default App
