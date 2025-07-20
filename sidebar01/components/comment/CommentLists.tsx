'use client'

import { FC } from 'react'
import React, { memo } from 'react'

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

const CommentsLists: FC<IProps> = (props) => {
  return <div>{}</div>
}

export default memo(CommentsLists)
