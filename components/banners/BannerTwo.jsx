import { AntDesign } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const DATA = [
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FgbharyCRH4P2CIQaZvDGq.jpeg&w=2048&q=100',
  },
  {
    title: '数码商品',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2Fb9ZiyMDRD0W-dBVkWF1L6.jpeg&w=2048&q=100',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FH_1mJBnX8_RrdfoEHCby2.jpeg&w=2048&q=100',
  },
  {
    title: '数码商品',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FtX_L0mZwdm5SNNyKF4gD_.jpeg&w=2048&q=100',
  },
]

export default function BannerTwo() {
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">推荐专题</Text>
        <TouchableOpacity className="flex flex-row items-center space-x-1">
          <Text className="text-neutral-400 text-base">更多</Text>
          <AntDesign name="arrowright" size={14} color="rgb(163 163 163)" />
        </TouchableOpacity>
      </View>
      <FlashList
        data={DATA}
        renderItem={({ item, index }) => (
          <View className="h-[30vw] w-[70vw] mr-4" key={index}>
            <Image
              key={index}
              source={{
                uri: item.uri,
              }}
              className="w-full h-full rounded-lg"
            />
          </View>
        )}
        horizontal
        estimatedItemSize={200}
      />
    </View>
  )
}
