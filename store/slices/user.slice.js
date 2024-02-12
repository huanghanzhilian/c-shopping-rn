import { createSlice } from '@reduxjs/toolkit'

const token = ''
const initialState = { token }

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
  },
})

export const { userLogout, userLogin } = userSlice.actions

export default userSlice.reducer
