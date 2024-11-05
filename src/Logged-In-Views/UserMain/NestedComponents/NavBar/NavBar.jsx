import React from 'react'
import { CiLogout, CiUser } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

//styles
import './styles/NavBar.css'

function NavBar(props) {

    const navigate = useNavigate()

    const handleLogout = () => {
        //clear cookies, navigate back to the home page
        localStorage.removeItem('user')
        localStorage.removeItem('token')

        navigate('/')
    }

    


    return (
        <nav className="user-navigation">
            <ul className="user-navigation-items">
                <li className="nav-item">
                    <CiUser aria-hidden={true}/>
                    <span>Profile</span>
                </li>
                <li className="nav-item" onClick={handleLogout}>
                    <CiLogout aria-hidden={true}/>
                    <span>Logout</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar