import { Image, Text, View } from 'react-native'

export default function EmptyCustomList() {
  return (
    <View className="flex items-center justify-center h-full space-y-6 bg-white">
      <Image
        source={require('@/assets/images/list-empty.png')}
        className="w-[50vw] aspect-square"
      />
      <View className="px-4 space-y-2 flex items-center justify-center">
        <Text className="text-sm">数据还没准备好呢</Text>
      </View>
    </View>
  )
}
