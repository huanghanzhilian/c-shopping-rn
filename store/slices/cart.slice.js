import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tempSize: null,
  tempColor: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTempColor: (state, action) => {
      state.tempColor = action.payload
    },

    setTempSize: (state, action) => {
      state.tempSize = action.payload
    },
  },
})

export const { setTempColor, setTempSize } = cartSlice.actions

export default cartSlice.reducer
