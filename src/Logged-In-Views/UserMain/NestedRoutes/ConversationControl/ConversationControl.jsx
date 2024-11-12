import React from 'react'
import { useActiveConversation } from '../../Contexts/ActiveConversationContext'

function ConversationControl() {
    const {activeConversation} = useActiveConversation()

    
    return (
        <>
            {activeConversation}
        </>
    )
}

export default ConversationControl