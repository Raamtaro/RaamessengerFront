import React from 'react'
import { CiLogout, CiUser } from 'react-icons/ci'

function NavBar(props) {
  return (
    <nav className="user-navigation">
        <ul className="user-navigation-items">
            <li className="nav-item">
                <CiUser aria-hidden={true}/>
                <span>Profile</span>
            </li>
            <li className="nav-item">
                <CiLogout aria-hidden={true}/>
                <span>Logout</span>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar