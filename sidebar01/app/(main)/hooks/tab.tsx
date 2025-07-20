import type { FC } from 'react'
import React, { memo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

const tabContent = [
  { label: '全部', value: 'all', text: '全部' },
  { label: '待处理', value: 'pending', text: '待处理' },
  { label: '已完成', value: 'done', text: '已完成' },
]

const TabsDemo: FC = () => {
  return (
    <Tabs defaultValue="all" className="w-[400px]">
      <TabsList>
        {tabLists.map((item) => (
          <TabsTrigger value={item.value} key={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabContent.map((item) => (
        <TabsContent value={item.value} key={item.value}>
          {item.text}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default memo(TabsDemo)
