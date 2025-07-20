import type { FC } from 'react'
import React, { memo } from 'react'

import ComponentB from '@/app/(main)/props/context/componentB'

const ComponentA: FC = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      <h1>ComponentA</h1>
      <ComponentB />
    </div>
  )
}

export default memo(ComponentA)
