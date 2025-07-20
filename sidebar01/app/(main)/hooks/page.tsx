import type { FC } from 'react'
import React, { memo } from 'react'
import UseState from './useState'
import TabLists from '@/app/(main)/hooks/tabLists'
import DeMasterTabs from '@/app/(main)/hooks/DeMasterTabs'

const Hooks: FC = () => {
  return (
    <div className="px-4 lg:px-6 flex flex-col  justify-center gap-4">
      <h1 className={'text-4xl font-bold'}>This is the React Hooks Study</h1>
      {/* <UseState /> */}
      <UseState />
      <TabLists />
      <DeMasterTabs />
    </div>
  )
}

export default memo(Hooks)
