import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistReducer } from 'redux-persist'

//? Reducers
import cartReducer from './slices/cart.slice'
import userReducer from './slices/user.slice'

import apiSlice from '@/services/api'

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
}

const cartPersistedReducer = persistReducer(persistConfig, cartReducer)

//? Actions
export * from './slices/user.slice'
export * from './slices/cart.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartPersistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
})

setupListeners(store.dispatch)
