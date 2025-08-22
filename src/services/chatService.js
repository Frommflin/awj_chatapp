const baseUrl = 'https://chatify-api.up.railway.app/messages'

const getMessages = async (jwt,id) => {
    const response = await fetch(`${baseUrl}?conversationId=${id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      }
    })
    return await response.json()
}

const sendMessage = async (jwt,text,conversationId) => {
    const response = await fetch(baseUrl,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
      body: JSON.stringify({text,conversationId})
    })
    return response
}

export { getMessages, sendMessage }
