import { Text, View } from 'react-native'

export default function DiscountProduct({ discount }) {
  //? Render(s)
  return (
    <View className="bg-red-500 block pt-0.5 px-2 w-fit h-fit rounded-full overflow-hidden">
      <Text className="text-white">{discount}%</Text>
    </View>
  )
}
