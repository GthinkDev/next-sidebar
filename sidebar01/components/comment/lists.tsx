import type { FC } from 'react'
import React, { memo } from 'react'
import CommentItem from '@/components/items'

const CommentLists: FC = () => {
  return (
    <div>
      <CommentItem />
    </div>
  )
}

export default memo(CommentLists)
