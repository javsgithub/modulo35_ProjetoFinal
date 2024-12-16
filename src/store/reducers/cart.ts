import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../pages/FirstRestaurant'

type CartState = {
  items: Item[]
  isOpen: boolean
  cartSidebar: boolean
  delivery: boolean
  payment: boolean
  confirmation: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  cartSidebar: true,
  delivery: false,
  payment: false,
  confirmation: false
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
    handleCartSidebar: (state) => {
      if (state.cartSidebar === false) {
        state.cartSidebar = true
      } else state.cartSidebar = false
    },
    handleDelivery: (state) => {
      if (state.delivery === false) {
        state.delivery = true
      } else state.delivery = false
    },
    handlePayment: (state) => {
      if (state.payment === false) {
        state.payment = true
      } else state.payment = false
    },
    handleConfirmation: (state) => {
      if (state.confirmation === false) {
        state.confirmation = true
      } else state.confirmation = false
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
  handleCartSidebar,
  handleDelivery,
  handlePayment,
  handleConfirmation,
  clearState
} = cartSlice.actions
export default cartSlice.reducer
