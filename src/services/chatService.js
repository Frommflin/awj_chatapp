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

export { getMessages }
