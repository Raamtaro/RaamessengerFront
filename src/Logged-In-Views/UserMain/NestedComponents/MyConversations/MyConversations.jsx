import React, {useEffect, useState} from 'react'
import { useActiveConversation } from '../../Contexts/ActiveConversationContext'

function MyConversations() {

  const [myConversations, setMyConversations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const {selectConversation} = useActiveConversation()

  useEffect(()=> {
    const token = localStorage.getItem('token')
    const getMyConversations = async () => {
      setLoading(true)

      if (error) {
        setError(false)
      }
      
      try {

        const response = await fetch(
          'http://localhost:3000/conversation/conversations/mine',
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            },
          }
        )


        if (!response.ok) {
          throw new Error("Couldn't retrieve conversations, please refresh and try again")
        }

        const result = await response.json()
        setMyConversations(result.userConversations)

      } catch(err) {
        setError(true)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getMyConversations()
  }, [])

  useEffect(()=> {
    if (myConversations.length > 0) {
      console.log(myConversations)
    }
  }, [myConversations])

  return (
    <>
      <aside>
        <h2>
          My Chats
        </h2>
        <ul className="user-conversation-list">
          {
            myConversations.map(
              (conversation, index) => (
                <li
                  key={index}
                  className='user-converation-list-item'
                  onClick={() => selectConversation(conversation)}

                >
                  {conversation.title}
                </li>
              )
            )
          }
        </ul>
      </aside>
    </>
  )
}

export default MyConversations