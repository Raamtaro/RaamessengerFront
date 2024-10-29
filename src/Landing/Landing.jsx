import React from 'react'
import './styles/Landing.css'
import { useNavigate } from 'react-router-dom'

function Landing() {
    /**
     * This is the landing page that the user will see when they initially happen upon the website (logged out, no token)
     */

    const navigate = useNavigate()

    const handleLoginNav = () => {
        navigate('/login')
    }

    const handleSignupNav = () => {
        navigate('/signup')
    }


    return (
        <>
            <section className="landing-page landing-flex-container">


                
                    <h1>
                        A place where you can chat with your friends!
                        <br />
                        <br />
                        No nsfw content, and please be respectful!
                    </h1>
                    <h3 className="auth-links">
                        <p>Already registered? <span onClick={handleLoginNav}>Welcome back!</span></p>
                        <p>New here? <span onClick={handleSignupNav}>Sign up now!</span></p>
                    </h3>
                

            </section>
        </>
    )
}

export default Landing