import { AntDesign } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const DATA = [
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FAAR1hdzMBEfpYKym3njGU.jpeg&w=3840&q=100',
  },
  {
    title: '数码商品',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FtHzPZwswSaFdD_3TpdPCt.jpeg&w=3840&q=100',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FluBUyOForM7vLS8SMMORT.jpeg&w=3840&q=100',
  },
  {
    title: '数码商品',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FAG8T4X-3pFnHc1O2XEeN5.jpeg&w=3840&q=100',
  },
]

export default function BannerOne() {
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">今日专题</Text>
        <TouchableOpacity className="flex flex-row items-center space-x-1">
          <Text className="text-neutral-400 text-base">更多</Text>
          <AntDesign name="arrowright" size={14} color="rgb(163 163 163)" />
        </TouchableOpacity>
      </View>
      <View className=" w-full flex flex-row flex-wrap">
        {DATA.map((item, index) => (
          <View
            className={`w-[49%] h-24 mr-[2%] mb-[2%] ${index % 2 === 1 ? 'mr-0 mb-0' : ''}`}
            key={index}
          >
            <Image
              key={index}
              source={{
                uri: item.uri,
              }}
              className="w-full h-full rounded-lg"
            />
          </View>
        ))}
      </View>
    </View>
  )
}
