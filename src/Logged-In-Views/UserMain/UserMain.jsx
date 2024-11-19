import React from 'react'
import { Outlet } from 'react-router-dom' //Might not need useNavigate()
import { ActiveConversationContextProvider } from './Contexts/ActiveConversationContext.jsx'
import {io} from 'socket.io-client'

/**
 * Children
 */

//Components
import NavBar from './NestedComponents/NavBar/NavBar.jsx'
import MyConversations from './NestedComponents/MyConversations/MyConversations.jsx'





//Routes


function UserMain() { //Outlet for conversation viewer + composer
    const socket = io(`${import.meta.env.VITE_SERVER_URL}`)

    return (
        <section className='user-main-section'>
            <NavBar />
            <MyConversations />
            <Outlet />
            {/* Vertical Nav Bar all the way to the left */}
            {/* Existing Chats */}
            {/* Main Outlet for the selected conversation - should default to the most recent conversation when user signs in to a fresh session */}
            {/* The actual conversation viewer/main hub should include a message composer and chat bubbles with the user's avatar (or initials) next to the message */}
        </section>
    )
}

export default UserMain