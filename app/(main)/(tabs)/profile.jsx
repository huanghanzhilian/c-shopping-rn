import { Link, Stack } from 'expo-router'
import { View, Text } from 'react-native'

import { AuthWrapper } from '@/components'

export default function ProfileScreen() {
  //？Render(s)
  return (
    <>
      <Stack.Screen />
      <AuthWrapper>
        <View className="flex-1 items-center justify-center bg-white">
          <Text>Profile screen</Text>
          <Text>account</Text>
          <Link href="/account">设置账户</Link>
        </View>
      </AuthWrapper>
    </>
  )
}
