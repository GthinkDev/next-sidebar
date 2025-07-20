import CommentLists from '@/components/comment/lists'
import type { FC } from 'react'
import React, { memo } from 'react'

const Comments: FC = () => {
  return (
    <div>
      <h1 className={'text-2xl font-bold'}>The Comment Lists Page</h1>
      <CommentLists />
    </div>
  )
}

export default memo(Comments)
