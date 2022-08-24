import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartType = {
    id: number
    title: string
    subtitle: string
    price: number
    image: string
    count: number
}
  
interface CartInitialState {
    payload: number
    totalPrice: number
    subjects: CartType[]
}

const initialState: CartInitialState = {
  totalPrice: 0,
  subjects: [],
  payload: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartType>) {
        const findItem = state.subjects.find((obj) => obj.id === action.payload.id)
  
        if (findItem) {
          findItem.count++;
        }  else {
          state.subjects.push({
            ...action.payload,
            count: 1,
          });
        }
  
        state.totalPrice = state.subjects.reduce((sum, obj) => {
          return (obj.price * obj.count) - sum
        }, 0)
      },
      minusItem(state, action: PayloadAction<CartType>) {
        const findItem = state.subjects.find((obj) => obj.id === action.payload.id)
  
        if(findItem) {
          findItem.count -= 1;
        }
  
        state.totalPrice = state.subjects.reduce((sum, obj) => {
          return (obj.price * obj.count) - sum
        }, 0)
      },
      removeItem (state: CartInitialState, action: PayloadAction<number>) {
        state.subjects = state.subjects.filter((obj) => obj.id !== action.payload)
        
        state.totalPrice = state.subjects.reduce((sum, obj) => {
          return (obj.price * obj.count) - sum
        }, 0)
      },
      clearItems (state) {
        state.subjects = []
        state.totalPrice = 0
      }
    },
  },
)

// Action creators are generated for each case reducer function
export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer