'use client'

import { Button } from '@/components/ui/button'
import { decrement, increment } from '@/store/modules/counterStore'
import type { FC } from 'react'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxDemo: FC = () => {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="px-4 lg:px-6 flex flex-col  justify-center gap-4">
      <h1 className={'font-bold text-4xl'}>This is the ReduxDemo Page</h1>
      <div className={'flex gap-4 justify-start items-center'}>
        <Button
          variant={'outline'}
          size={'lg'}
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        {count}
        <Button
          variant={'outline'}
          size={'lg'}
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
    </div>
  )
}

export default memo(ReduxDemo)
