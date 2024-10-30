import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'

import './styles/Signup.css'

function Signup() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  //For the success message
  const [signupName, setSignupName] = useState('')

  //Ref for the form, to clear it after the user hits submit

  const formRef = useRef()


  const handleSubmit = async (event) => {
    event.preventDefault()

    /**
     * Post to the signup route 
     */

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries());
    setLoading(true)
    setSignupName('')

    if (error) {
      setError(false)
    }
    
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
        setSignupName(result.newUser.name)
        console.log(result.name) //undefined
        formRef.current.reset()
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
    } 

    catch (err) {
      setError(true)
      // console.log('reached')
      console.error(err.message)
    } 

    finally {
      setLoading(false)
      
    }

  }

  const handleLoginNav = () => {
    navigate('/login')
  }

  return (
    <>
        <section className="signup-section">
            <form ref={formRef} onSubmit={handleSubmit} className='signup-form'>
              {
                (signupName && !error) && (
                  <div className="success-message">
                    <p className="success-message-text">
                      Sign up successful, {signupName}. 
                      <br />
                      <br />
                      Please <span className='signup-to-login' onClick={handleLoginNav}>login</span> with your email and password.
                    </p>
                  </div>
                )
              }
              {
                error && (
                  <div className="error-message">
                    <p className="error-message-text">
                      Sorry, we couldn't process that. 
                      <br />
                      <br />
                      Please try again, or contact raam.sanghani@gmail.com for support.
                    </p>
                  </div>
                )
              }
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