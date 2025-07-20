import DeMasterUseEffect from '@/app/(main)/hooks/useEffect/DeMasterUseEffect'
import DeMasterContext from '@/app/(main)/props/context/DeMasterContext'
import DeMasterProps from '@/app/(main)/props/props/DeMasterProps'
import type { FC } from 'react'
import React, { memo } from 'react'
import PlayButton from './PlayButton'
import UploadButton from './UploadButton'

const PropsPage: FC = () => {
  return (
    <div className="px-4 lg:px-6">
      <h1 className="text-4xl font-bold">This is the Props page</h1>
      <div className="flex  gap-4 py-4 md:gap-6 md:py-6">
        <PlayButton movieName={'绝命毒师'} /> <UploadButton />
        <DeMasterProps />
        <DeMasterContext />
        <DeMasterUseEffect />
      </div>
    </div>
  )
}

export default memo(PropsPage)
