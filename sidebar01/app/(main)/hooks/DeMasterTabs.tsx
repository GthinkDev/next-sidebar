'use client'

import React, { FC, memo, useState } from 'react'
import { Button } from '@/components/ui/button'

const tabLists = [
  {
    label: '全部',
    value: 'all',
  },
  {
    label: '待处理',
    value: 'pending',
  },
  {
    label: '已完成',
    value: 'done',
  },
]

const DeMasterTabs: FC = () => {
  // 1、Tab 切换功能
  // 2、点击谁就把谁的 focus 记录下来
  // 3、根据 focus 来展示不同的内容
  const [focus, setFocus] = useState('all')
  const handleClick = (value: string) => {
    // console.log(value)
    setFocus(value)
  }

  return (
    <div className={'flex bg-secondary'}>
      {tabLists.map((item) => (
        <Button
          variant={'ghost'}
          key={item.value}
          onClick={() => handleClick(item.value)}
          className={`${focus === item.value && 'bg-fuchsia-300 pointer-events-none'}`}
        >
          {item.label}
        </Button>
      ))}
    </div>
  )
}

export default memo(DeMasterTabs)
