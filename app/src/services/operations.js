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

export const createOperation = async (categoryId, type, amount, description) => {
  const res = await fetch('http://localhost:3000/api/operation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({ categoryId, type, amount, description })
  })

  const response = await res.json()
  if (response.error) throw new Error(response.error)

  return response
}

export const editOperation = async (categoryId, amount, description, id) => {
  const res = await fetch(`http://localhost:3000/api/operation/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({ categoryId, amount, description })
  })

  const response = await res.json()
  if (response.error) throw new Error(response.error)

  return response
}

export const removeOperation = async (id) => {
  const res = await fetch(`http://localhost:3000/api/operation/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })

  const response = await res.json()
  if (response.error) throw new Error(response.error)

  return response.msg
}
