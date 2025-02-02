import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../pages/FirstRestaurant'

type CartState = {
  items: Item[]
  isOpen: boolean
  deliveryOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  deliveryOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      const dish = state.items.find((item) => item.id === action.payload.id)

      if (!dish) {
        state.items.push(action.payload)
      } else {
        alert('Produto já adicioando ao seu carrinho!')
      }
    },
    exclude: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openDelivery: (state) => {
      state.deliveryOpen = true
    },
    closeDelivery: (state) => {
      state.deliveryOpen = false
    },
    clearState: (state) => {
      state.items = []
    }
  }
})

export const {
  add,
  open,
  close,
  exclude,
  openDelivery,
  closeDelivery,
  clearState
} = cartSlice.actions
export default cartSlice.reducer
