'use client'
import ComponentA from '@/app/(main)/props/context/componentA'
import { createContext, FC } from 'react'
import React, { memo } from 'react'

// 1. createContext 方法创建一个上下文对象
export const MsgContext = createContext('')

const DeMasterContext: FC = () => {
  const Msg = 'This is the context message~~~'
  return (
    <div>
      {/*// 2. 在顶层组件中通过 provider 组件包裹子组件，并传入一个值*/}
      <MsgContext.Provider value={Msg}>
        <ComponentA />
      </MsgContext.Provider>
    </div>
  )
}

export default memo(DeMasterContext)
