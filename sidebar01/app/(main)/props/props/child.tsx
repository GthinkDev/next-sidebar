import type { FC, ReactNode } from 'react'

import React, { memo } from 'react'
import Button from '../Button'

interface IProps {
  name?: string
  getChildrenMsg: (childrenMsg: string) => void
  children?: ReactNode
}

const DeMasterChildren: FC<IProps> = (props) => {
  const { name, children, getChildrenMsg } = props
  const childrenMsg = "I'm children "
  return (
    <div>
      <div>{children}</div>
      <p className={'text-2xl font-medium'}>{name}</p>
      <Button onClick={() => getChildrenMsg(childrenMsg)}> Click</Button>
    </div>
  )
}

export default memo(DeMasterChildren)
