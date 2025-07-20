'use client'

import CommentLists from '@/components/comment/CommentLists'
import type { FC } from 'react'
import React, { memo } from 'react'

const CommentPage: FC = () => {
  return (
    <div>
      <h1 className={'text-2xl font-bold'}>This is the CommentPage</h1>
      <CommentLists
        rpid={''}
        user={{
          uid: '',
          avatar: '',
          name: '',
        }}
        content={''}
        time={''}
        like={''}
      />
    </div>
  )
}

export default memo(CommentPage)
