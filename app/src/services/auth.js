export const register = async (email, username, password) => {
  const res = await fetch('http://localhost:3000/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, username, password })
  })

  const response = await res.json()
  if (response.error) throw new Error(response.error)

  return response.msg.token
}

export const login = async (email, password) => {
  const res = await fetch('http://localhost:3000/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const response = await res.json()
  if (response.error) throw new Error(response.error)

  return response.msg.token
}
