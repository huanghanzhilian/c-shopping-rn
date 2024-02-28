import { View, Text } from 'react-native'

import { AuthWrapper } from '@/components'

export default function CartScreen() {
  return (
    <AuthWrapper>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Cart screen</Text>
      </View>
    </AuthWrapper>
  )
}
