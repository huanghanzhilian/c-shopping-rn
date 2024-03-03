import { createSlice, nanoid } from '@reduxjs/toolkit'

import { exsitItem, getTotal } from '@/utils'

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  totalDiscount: 0,
  tempSize: null,
  tempColor: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { color, size, productID } = action.payload

      const isItemExist = exsitItem(state.cartItems, productID, color, size)

      if (isItemExist) {
        isItemExist.quantity += 1
        state.totalItems = getTotal(state.cartItems, 'quantity')
        state.totalPrice = getTotal(state.cartItems, 'price')
        state.totalDiscount = getTotal(state.cartItems, 'discount')
      } else {
        state.cartItems.push({ itemID: nanoid(), ...action.payload })
        state.totalItems = getTotal(state.cartItems, 'quantity')
        state.totalPrice = getTotal(state.cartItems, 'price')
        state.totalDiscount = getTotal(state.cartItems, 'discount')
      }
    },

    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item.itemID === action.payload)

      if (index !== -1) {
        state.cartItems.splice(index, 1)
        state.totalItems = getTotal(state.cartItems, 'quantity')
        state.totalPrice = getTotal(state.cartItems, 'price')
        state.totalDiscount = getTotal(state.cartItems, 'discount')
      }
    },

    increase: (state, action) => {
      state.cartItems.forEach(item => {
        if (item.itemID === action.payload) item.quantity += 1
      })
      state.totalItems = getTotal(state.cartItems, 'quantity')
      state.totalPrice = getTotal(state.cartItems, 'price')
      state.totalDiscount = getTotal(state.cartItems, 'discount')
    },

    decrease: (state, action) => {
      state.cartItems.forEach(item => {
        if (item.itemID === action.payload) item.quantity -= 1
      })
      state.totalItems = getTotal(state.cartItems, 'quantity')
      state.totalPrice = getTotal(state.cartItems, 'price')
      state.totalDiscount = getTotal(state.cartItems, 'discount')
    },

    clearCart: state => {
      state.cartItems = []
      state.totalItems = 0
      state.totalPrice = 0
      state.totalDiscount = 0
    },
    setTempColor: (state, action) => {
      state.tempColor = action.payload
    },

    setTempSize: (state, action) => {
      state.tempSize = action.payload
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decrease,
  increase,
  setTempColor,
  setTempSize,
} = cartSlice.actions

export default cartSlice.reducer
