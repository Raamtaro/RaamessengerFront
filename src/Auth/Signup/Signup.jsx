import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/Signup.css'

function Signup() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault()

    /**
     * Post to the signup route 
     */

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries());
    setLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      if (response.ok) {
        const result = await response.json()
        console.log(result)
      }
    } 

    catch (err) {
      setError(true)
      console.error(err.message)
    } 

    finally {
      setLoading(false)
    }

  }

  return (
    <>
        <section className="signup-section">
            <form onSubmit={handleSubmit} className='signup-form'>
              <div className="form-inputs">
                <div className="form-section">
                  <input type="text" id="name" name="name" placeholder="Joe Bob Sue Due" autoComplete='on' required/>
                  <label htmlFor="email">Name</label>
                </div>
                <div className="form-section">
                  <input type="email" id="email" name="email" placeholder="info@mailaddress.com" autoComplete='on' required/>
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-section">
                  <input type="password" id="password" name="password" placeholder="••••••••••••" autoComplete='on' required/>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              
              <button type="submit">Signup</button>
            </form>
        </section>
    </>
  )
}

export default Signup