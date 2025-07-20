'use client'

import counterStore from '@/store/modules/counterStore'
import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({
  reducer: {
    counter: counterStore,
  },
})
export default Store
