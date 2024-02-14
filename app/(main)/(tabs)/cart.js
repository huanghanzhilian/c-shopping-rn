import { Link } from 'expo-router'
import { View, Text, Pressable, StyleSheet } from 'react-native'

import { useAppSelector, useAppDispatch } from '@/hooks'
import { setTokenAsync } from '@/store'

export default function CartScreen() {
  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { token, status } = useAppSelector(state => state.user)

  //? Handlers
  const onLogOut = async () => {
    dispatch(setTokenAsync(''))
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Cart screen</Text>
      {token ? (
        <>
          <Text>token: {token}</Text>
          <Pressable onPress={onLogOut}>
            <Text>Log Out {status}</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text>用户未登录</Text>
          <Link href="/login">去登录</Link>
        </>
      )}
    </View>
  )
}
