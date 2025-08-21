
const getCSRF = async () => {
    const response = await fetch('https://chatify-api.up.railway.app/csrf', {
        method: "PATCH"
    })
    
    return await response.json()
}

const registerUser = async (username,password,email,avatar,csrfToken) => {
    const response = await fetch('https://chatify-api.up.railway.app/auth/register',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username,password,email,avatar,csrfToken})
    })
    return response
}

export { getCSRF, registerUser }