import React, {useContext, createContext, useState, useEffect} from "react";

const ActiveConversationContext = createContext(null)

export const useActiveConversation = () => useContext(ActiveConversationContext)    

export const ActiveConversationContextProvider =({children}) => {
    const [activeConversation, setActiveConversation] = useState(null)

    const selectConversation = (conversation) => {
        setActiveConversation(conversation)
        console.log(conversation)
    }

    return (
        <ActiveConversationContext.Provider value={{selectConversation, activeConversation}}>
            {children}
        </ActiveConversationContext.Provider>
    )
}