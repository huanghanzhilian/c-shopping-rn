import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { View, Text } from 'react-native'

export default function SingleProductScreen() {
  const router = useRouter()
  const params = useLocalSearchParams()
  return (
    <>
      <Stack.Screen
        options={{
          title: params.id,
        }}
      />
      <View className="flex-1 items-center justify-center bg-white">
        <Text>SingleProduct Screen, params.id: {params.id}</Text>
      </View>
    </>
  )
}
