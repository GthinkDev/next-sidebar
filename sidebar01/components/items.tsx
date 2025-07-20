import type { FC } from 'react'
import React, { memo } from 'react'
import comments from '@/components/comment/data'
import { Button } from '@/components/ui/button'

const CommentItem: FC = () => {
  const items = comments.commentLists
  return (
    <div className={'flex flex-col gap-8 w-full justify-center'}>
      {items.map((item) => {
        return (
          <div className={'flex gap-4 w-full justify-start'} key={item.id}>
            <div>{item.avatar}</div>
            <div className={'flex-1 gap-8 border-b-1'}>
              <div className={'flex gap-2 items-center'}>
                <h1 className={'text-lg font-medium'}>{item.name}</h1>
                <p className={'text-gray-500'}>{item.date}</p>
                <div className={'flex-1 items-end justify-end'}>
                  <Button variant={'outline'} size={'sm'}>
                    {item.status}
                  </Button>
                </div>
              </div>
              <div className={'p-2 bg-gray-100 rounded-md h-max'}>
                <p>{item.comment}</p>
              </div>
              <div>点赞数量:{item.likes}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default memo(CommentItem)
