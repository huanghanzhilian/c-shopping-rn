import { View, Text, Image } from 'react-native'

export default function Slider() {
  return (
    <View className="mt-3 rounded-lg overflow-hidden">
      <Image
        source={{
          uri: 'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image/banners/Q1jcHDoeNTWQaU27dGY_X.jpeg',
        }}
        className="w-full h-40"
      />
    </View>
  )
}
