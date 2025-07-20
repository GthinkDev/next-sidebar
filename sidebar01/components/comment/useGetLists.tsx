'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

// 封装自定义 Hooks，获取列表数据
function useGetLists() {
  const [lists, setLists] = useState([])
  useEffect(() => {
    async function getLists() {
      const res = await axios.get('http://localhost:3001/list')
      setLists(res.data)
    }

    getLists().then((r) => console.log(r))
  }, [])
  return {
    lists,
    setLists,
  }
}

export default useGetLists
