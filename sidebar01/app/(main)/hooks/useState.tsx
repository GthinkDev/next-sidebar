'use client'
import { Button } from '@/components/ui/button'
import type { FC } from 'react'
import React, { memo, useState } from 'react'

const UseState: FC = () => {
  // 使用 useState 来管理状态
  // 这里的 count 是状态变量，setCount 是更新状态的函数
  // 初始值为 0
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({ name: 'hello', email: 'world' })

  // 点击事件回调函数
  const handleClick = () => {
    // 更新 count 的值
    // 通过 setCount 更新状态
    setCount(count + 1)
    // 可以在这里添加其他逻辑
  }

  const formChange = () => {
    setForm({
      ...form,
      name: 'De',
      email: 'Master',
    })
  }

  return (
    <div className="flex gap-4">
      <Button color="primary" variant={'secondary'} onClick={handleClick}>
        {count} 次点击
      </Button>
      <Button color="primary" variant={'secondary'} onClick={formChange}>
        {form.name}
        {form.email}
      </Button>
    </div>
  )
}

export default memo(UseState)
