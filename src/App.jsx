import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import './App.css'

function App() {
  const navigate = useNavigate()

  const handleHomeNav = () => {
    navigate('/')
  }
  

  return (
    <>
      <header onClick={handleHomeNav}>
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
