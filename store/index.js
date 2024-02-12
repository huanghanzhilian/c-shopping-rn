import { configureStore } from '@reduxjs/toolkit'

//? Reducers
import userReducer from './slices/user.slice'

//? Actions
export * from './slices/user.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})