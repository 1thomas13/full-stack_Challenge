export const getAllOperations = async () => {
  const res = await fetch('http://localhost:3000/api/operation', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })

  const response = await res.json()

  if (response.error) throw new Error(response.error)

  return response.msg
}

export const getAllCategory = async () => {
  const res = await fetch('http://localhost:3000/api/category', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const response = await res.json()

  if (response.error) throw new Error(response.error)

  return response
}
