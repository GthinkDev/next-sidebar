import type { FC } from 'react'
import React, { memo } from 'react'

import CommentPage from '@/components/comment/CommentPage'

const page: FC = () => {
  return (
    <div className="px-4 lg:px-6 flex flex-col  justify-center gap-4">
      <CommentPage />
    </div>
  )
}

export default memo(page)
