'use client'

import { Button } from '@/components/ui/button'
import type { FC } from 'react'
import React, { memo } from 'react'
import Image from 'next/image'

interface IProps {
  rpid: string
  user: {
    uid: string
    avatar: string
    name: string
  }
  content: string
  time: string
  like: string
}

const CommentItem: FC<IProps> = (props) => {
  const { user, content, time, like } = props
  return (
    <div className={'flex flex-col gap-4 py-2'}>
      <h1 className={'text-lg font-bold'}>精彩评论</h1>
      <main className={'flex gap-4 w-full'}>
        <div>
          <Image
            alt={'missing'}
            src={''}
            width={48}
            height={48}
            className={'rounded-full bg-gray-200'}
          />
        </div>
        <div className={'flex flex-col gap-4 w-full pb-4 border-b-1'}>
          <h1 className={'text-lg font-bold text-red-400'}>{user.name}</h1>
          <p>{content}</p>
          <div className={'flex justify-between'}>
            <div className={'flex gap-4 justify-start items-center'}>
              <p className={'text-gray-400'}>{time}</p>
              <Button variant={'ghost'} size={'sm'}>
                删除
              </Button>
            </div>
            <p>点赞:{like}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default memo(CommentItem)
