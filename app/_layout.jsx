import AsyncStorage from '@react-native-async-storage/async-storage'
import { Stack } from 'expo-router/stack'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { Provider } from 'react-redux'

import { store, setToken } from '@/store'

export default function RootLayout() {
  //? Assets
  const [isReady, setIsReady] = useState(false)
  const [loadedUser, setLoadedUser] = useState(null)

  const getUserFromStorage = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setLoadedUser({
        email: 'admin@gmail.com',
      })
      store.dispatch(setToken(token))
    }
    setIsReady(true)
  }

  useEffect(() => {
    getUserFromStorage()
  }, [])

  if (!isReady)
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    )

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="(main)/(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
        <Toast />
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
