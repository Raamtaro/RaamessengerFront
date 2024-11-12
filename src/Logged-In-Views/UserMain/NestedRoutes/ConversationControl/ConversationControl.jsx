import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'





function ConversationControl() {
    const {id} = useParams()

    const [conversation, setConversation] = useState()

    useEffect(()=> {
        const token = localStorage.getItem('token')

        const retrieveConversation = async() => {
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

            } catch(err) {
                console.error('Error:', err)
            }
        }

        retrieveConversation()

    },[])
    

    
    return (
        <>
        
            
        </>
    )
}

export default ConversationControl