import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { setTokenAsync } from '@/store'











export default function LoginScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  const router = useRouter()

  //? Store
  const { status } = useAppSelector(state => state.user)

  //? Handlers
  const onLogIn = async () => {
    try {
      await dispatch(setTokenAsync('123456')).unwrap()
      router.back()
    } catch (error) {}
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable onPress={onLogIn}>
        <Text>Login: {status}</Text>
      </Pressable>
    </View>
  )
}
