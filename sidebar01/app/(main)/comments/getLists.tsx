'use client'
import useGetLists from '@/components/comment/useGetLists'
import React, { FC, memo } from 'react'

interface comment {
  rpid: string
  user: {
    uid: '1'
    avatar: ''
    name: '张三'
  }
  content: '这是一条评论'
  time: '01-01 08:00'
  like: 131
}

const GetLists: FC = () => {
  // const [lists, setLists] = useState([])
  // useEffect(() => {
  //   async function getLists() {
  //     const res = await axios.get('http://localhost:3001/list')
  //     setLists(res.data)
  //   }
  //
  //   getLists().then((r) => console.log(r))
  // }, [])
  const { lists } = useGetLists()
  return (
    <div className={'flex flex-col gap-4'}>
      <h1 className={'text-2xl font-bold'}>GetLists</h1>
      <ul className={'gap-4 flex flex-col'}>
        {lists.map((list: comment) => {
          return (
            <li
              key={list.rpid}
              className={' flex flex-col gap-4 bg-gray-900 p-4'}
            >
              <h1 className={'text-lg font-black'}>{list.user.name}</h1>
              <p>{list.content}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default memo(GetLists)
