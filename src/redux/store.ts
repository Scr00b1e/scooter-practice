import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import  cartSlice  from './cartSlice/CartSlice'

export const store = configureStore({
  reducer: {
    cartSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch