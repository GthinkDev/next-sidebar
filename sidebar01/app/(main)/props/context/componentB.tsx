import { FC, useContext } from 'react'
import React, { memo } from 'react'

import { MsgContext } from '@/app/(main)/props/context/DeMasterContext'

const ComponentB: FC = () => {
  // 3. 在子组件中通过 useContext 方法获取上下文对象中的值
  const Msg: string = useContext(MsgContext)
  return (
    <div className={'flex gap-4'}>
      <h1>ComponentB</h1>
      <p className={'font-bold'}>{Msg}</p>
    </div>
  )
}

export default memo(ComponentB)
