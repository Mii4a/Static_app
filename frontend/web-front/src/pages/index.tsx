import React, { FC, useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'

type User = {
  id: string,
  username: String,
  email: String,
}

export default(() => {
  const [users, setUser] = useState<User[]>([])

  const getAPIData = async () => {
    let instance: AxiosInstance

    instance = axios.create({
      baseURL: 'http://localhost:8080',
    })

    try {
      const response = await instance.get('/api/')
      console.log(response?.data)
      const userdata = response?.data as User[]
      setUser(userdata)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      hello world
      <button onClick={getAPIData}>click</button>
      {users.map((item) => (
        <div key={item.id}>
          <h1>{item.username}</h1>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  )
}) as FC
