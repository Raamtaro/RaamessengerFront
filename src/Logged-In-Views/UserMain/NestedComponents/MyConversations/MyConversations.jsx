import React, {useEffect, useState} from 'react'

function MyConversations() {


  const [myConversations, setMyConversations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  //Updating the backend to ensure that conversations are returned in descending order according to the most recent Message that is added to a conversation

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

        if (response.ok) {
          const result = await response.json()
          setMyConversations(result.userConversations)
        }

      } catch(err) {
        setError(true)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getMyConversations()
  }, [])

  // useEffect(()=> { //debug statement
  //   if (myConversations.length > 0) {
  //     console.log(myConversations)
  //   }
  // }, [myConversations])


  return (
    <>
      <aside>
        <h2>
          My Chats
        </h2>
      </aside>
    </>
  )
}

export default MyConversations