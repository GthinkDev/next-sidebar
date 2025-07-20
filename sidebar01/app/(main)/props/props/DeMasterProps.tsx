'use client'
import DeMasterChildren from '@/app/(main)/props/props/child'
import { FC, useState } from 'react'
import React, { memo } from 'react'

const DeMasterProps: FC = () => {
  const [msg, setMsg] = useState('')
  const getMsg = (msg: string) => {
    setMsg(msg)
  }
  return (
    <div>
      <DeMasterChildren name={'DeMaster'} getChildrenMsg={getMsg}>
        <p className={'text-2 font-bold'}>{msg}</p>
      </DeMasterChildren>
    </div>
  )
}

export default memo(DeMasterProps)
