import { router } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

import { useUserInfo } from '@/hooks'

export default function CategoryScreen() {
  //? Assets
  const { mustAuthAction } = useUserInfo()

  //? Handlers
  const handleJumpMore = () => {
    mustAuthAction(() => {
      router.push('/account')
    })
  }

  //? Render(s)
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Category screen</Text>
      <Pressable
        className=" w-fit py-2 px-8 flex-center bg-red-500 rounded-full"
        onPress={handleJumpMore}
      >
        <Text className="text-sm text-white">去用户中心</Text>
      </Pressable>
    </View>
  )
}
