import { AntDesign } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import DiscountProduct from '../product/DiscountProduct'
import ProductPrice from '../product/ProductPrice'
const DATA = [
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FS-0bkuZHpxoB0-eaxVrLe.webp&w=3840&q=100',
  },
  {
    title: '数码商品',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FX9AGWqXgzr7bgrc_-vL9q.webp&w=3840&q=100',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2Fn0sPwJaCzVYI4yZN_EANK.webp&w=3840&q=100',
  },
  {
    title: '数码商品',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FeIleut5TAwdnYitRE_bKU.webp&w=3840&q=100',
  },
]
export default function DiscountSlider() {
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">特价活动</Text>
        <TouchableOpacity className="flex flex-row items-center space-x-1">
          <Text className="text-neutral-400 text-base">更多</Text>
          <AntDesign name="arrowright" size={14} color="rgb(163 163 163)" />
        </TouchableOpacity>
      </View>
      <FlashList
        data={DATA}
        renderItem={({ item }) => (
          <View className="w-fit h-fit bg-white mx-0.5 py-3">
            <Image
              source={{
                uri: item.uri,
              }}
              className="w-32 h-32"
            />
            <View className="flex flex-row px-2 mt-1.5 justify-evenly items-start gap-x-2 ">
              <DiscountProduct discount={90} />
              <ProductPrice inStock={33} discount={90} price={100} />
            </View>
          </View>
        )}
        horizontal
        estimatedItemSize={200}
      />
    </View>
  )
}
