import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  lastSeen: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogout: state => {
      state.token = ''
    },

    userLogin: (state, action) => {
      state.token = action.payload
    },

    addToLastSeen: (state, action) => {
      const isItemExist = state.lastSeen.find(item => item.productID === action.payload.productID)

      if (!isItemExist) {
        if (state.lastSeen.length === 15) {
          state.lastSeen.splice(14, 1)
        }
        state.lastSeen.unshift(action.payload)
      }
    },
  },
})

export const { userLogout, userLogin, addToLastSeen } = userSlice.actions

export default userSlice.reducer
