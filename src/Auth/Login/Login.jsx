import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/Login.css'

function Login() {

  const formRef = useRef()

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  const [success, setSucess] = useState(false) //Different from error in the sense that this is only to indicate a temporary banner in case the page takes a while to load before redirecting.


  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries());

    /**
     * Make the API call to our endpoint, which, for now, will be at locahost:3000
     * MessengerServer is hosted on railway, and so the POST target will be updated as such when hosted
     */
    setLoading(true)
    try {
      const response = await fetch(
        'http://localhost:3000/auth/login',
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

        localStorage.setItem('user', JSON.stringify(result.user))
        localStorage.setItem('token', result.token)
        
        navigate(`/user/${result.user.id}`)

      } else {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
    } catch (err) {
      setError(true)
      console.error(err.message)
    } finally {
      setLoading(false)
      formRef.current.reset()

    }

  }

  return (
    <>
      <section className='login-section'>
          {
            error && (
              <div className="login-error-message">
                <p className="login-error-message-text">
                  Sorry, we couldn't process that. 
                  <br />
                  <br />
                  Please try again, or contact raam.sanghani@gmail.com for support.
                </p>
              </div>
            )
          }
          <form ref={formRef} onSubmit={handleSubmit} className="login-form">

            <div className="form-inputs">
              <div className="form-section">
                <input type="email" id="email" name="email" placeholder="info@mailaddress.com" autoComplete='on' required/>
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-section">
                <input type="password" id="password" name="password" placeholder="••••••••••••" autoComplete='on' required/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            
            <button type="submit">Login</button>

          </form>
      </section>
    </>
  )
}

export default Login