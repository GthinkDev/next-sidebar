'use client'

import React, { FC, memo, useState } from 'react'
import comments from '@/components/comment/data'
import { Button } from '@/components/ui/button'
import CommentLists from '@/components/comment/lists'

const DeMasterTabs: FC = () => {
  const [status, setStatus] = useState('All')
  const tabsList = comments.tabs
  const handleClick = (status: string) => {
    setStatus(status)
  }
  return (
    <div className={'flex flex-col gap-4'}>
      <ul className={'flex  w-[300px]'}>
        {tabsList.map((item) => (
          <Button
            variant={'ghost'}
            key={item.id}
            className={`flex-1 ${status === item.status && 'bg-foreground text-fuchsia-100 pointer-events-none'}`}
            onClick={() => handleClick(item.status)}
          >
            {item.status}
          </Button>
        ))}
      </ul>

      <main>
        <CommentLists />
      </main>
    </div>
  )
}

export default memo(DeMasterTabs)
