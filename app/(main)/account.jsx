import { Link, useRouter } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

import { AuthMustWrapper } from '@/components'
import { useAppSelector, useAppDispatch, useUserInfo } from '@/hooks'
import { setTokenAsync } from '@/store'

export default function AccountScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { userInfo } = useUserInfo()

  //? Store
  const { token, status } = useAppSelector(state => state.user)

  //? Handlers
  const onLogOut = async () => {
    try {
      await dispatch(setTokenAsync('')).unwrap()
      router.back()
    } catch (error) {}
  }

  //? Render(s)

  return (
    <AuthMustWrapper>
      <View className="flex-1 bg-white space-y-4">
        <Text>Account Screen</Text>
        <Text>token: {token}</Text>
        <Text>name: {userInfo.name}</Text>
        <Text>mobile: {userInfo.mobile}</Text>
        <Pressable
          className=" w-fit py-2 px-8 flex-center bg-red-500 rounded-full"
          onPress={onLogOut}
        >
          <Text className="text-sm text-white">Log Out {status}</Text>
        </Pressable>
      </View>
    </AuthMustWrapper>
  )
}
