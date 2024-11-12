/**
 * I actually don't believe that I need this at all - can probably just delete it
 */


import React, {useContext, createContext, useState, useEffect, act} from "react";
import { useNavigate } from "react-router-dom";

const ActiveConversationContext = createContext(null)

export const useActiveConversation = () => useContext(ActiveConversationContext)    

export const ActiveConversationContextProvider =({children}) => {
    const navigate = useNavigate()
    // const [activeConversation, setActiveConversation] = useState(null)

    const selectConversation = (conversation) => {
        // setActiveConversation(conversation)
        
    }

    // useEffect(()=> {
    //     console.log(activeConversation)
    //     if (activeConversation) {
            
    //     }

    // }, [activeConversation])

    return (
        <ActiveConversationContext.Provider value={{selectConversation}}>
            {children}
        </ActiveConversationContext.Provider>
    )
}