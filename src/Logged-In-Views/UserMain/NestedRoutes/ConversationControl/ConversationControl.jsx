import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function ConversationControl() {
    const {id} = useParams()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const [conversation, setConversation] = useState()
    

    useEffect(()=> {

        const token = localStorage.getItem('token')
        
        const retrieveConversation = async() => {
            setLoading(true)
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_SERVER_URL}/conversation/${id}`,
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        }
                    }
                )

                if (!response.ok) {
                    throw new Error('Could not retrieve the conversation')
                }

                const result = await response.json()
                console.log(result) //Successful
                setConversation(result.conversation)

            } catch(err) {
                console.error('Error:', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        retrieveConversation()

    },[id])

    // useEffect(()=> {
    //     console.log(conversation.id)
    // }, [conversation])
    

    
    return (
        <>
            <div className="conversation-viewer">
                <h3>{conversation?.id}</h3> 
                <div className="sent-messages">
                    {
                        conversation.messages.map(
                            (message)=>(
                                <span
                                    key={message.id}
                                    className={'conversation-message'}
                                >
                                    {message.body}
                                </span>
                            )
                        )
                    }
                </div>
            </div>           
        </>
    )
}

export default ConversationControl