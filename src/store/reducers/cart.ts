import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../pages/FirstRestaurant'

type CartState = {
  items: Item[]
  isOpen: boolean
  visible: boolean
  delivery: boolean
  payment: boolean
  confirmation: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  visible: true,
  delivery: true,
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
    show: (state) => {
      state.visible = true
    },
    hide: (state) => {
      state.visible = false
    },
    openDelivery: (state) => {
      state.delivery = true
    },
    closeDelivery: (state) => {
      state.delivery = false
    },
    openPayment: (state) => {
      state.payment = true
    },
    closePayment: (state) => {
      state.payment = false
    },
    openConfirmation: (state) => {
      state.confirmation = true
    },
    closeConfirmation: (state) => {
      state.confirmation = false
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
  show,
  hide,
  exclude,
  openDelivery,
  closeDelivery,
  openPayment,
  closePayment,
  openConfirmation,
  closeConfirmation,
  clearState
} = cartSlice.actions
export default cartSlice.reducer
