'use client'

import { FC, useEffect, useState } from 'react'
import React, { memo } from 'react'

const URL = 'https://jsonplaceholder.typicode.com/users'

// const fetchData = async () => {
//   try {
//     const response = await fetch(URL)
//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error('There was a problem with the fetch operation:', error)
//   }
// }

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const DeMasterUseEffect: FC = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    // 异步函数，用于获取数据
    async function fetchData() {
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setData(data)
    }
    fetchData().then((r) => console.log(r))
  }, [])
  return (
    <div>
      <h1 className={'text-2xl font-black'}>DeMasterUseEffect</h1>
      <ul>
        {data.map((item: User) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default memo(DeMasterUseEffect)
