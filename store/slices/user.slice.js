import AsyncStorage from '@react-native-async-storage/async-storage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'








const token = ""


const initialState = {
  token,
  status: 'idle',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setTokenAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(setTokenAsync.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(setTokenAsync.fulfilled, (state, action) => {
        state.status = 'idle'
      })
  },
})

export const setTokenAsync = createAsyncThunk(
  'user/setTokenAsync',
  async (token, { dispatch, getState }) => {
    try {
      await AsyncStorage.setItem('token', token)
      dispatch(setToken(token))
      return true
    } catch (err) {
      return false
    }
  }
)

export const { setToken } = userSlice.actions

export default userSlice.reducer
