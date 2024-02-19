import { AntDesign } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const DATA = [
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FaSsBC3FWVBq_U63f1ieOS.webp&w=384&q=75',
  },
  {
    title: '数码商品',
    uri: 'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image//icons/5WqXrtYDMWbZGP70y2wAR.webp',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FaSsBC3FWVBq_U63f1ieOS.webp&w=384&q=75',
  },
  {
    title: '数码商品',
    uri: 'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image//icons/5WqXrtYDMWbZGP70y2wAR.webp',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FaSsBC3FWVBq_U63f1ieOS.webp&w=384&q=75',
  },
  {
    title: '数码商品',
    uri: 'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image//icons/5WqXrtYDMWbZGP70y2wAR.webp',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FaSsBC3FWVBq_U63f1ieOS.webp&w=384&q=75',
  },
  {
    title: '数码商品',
    uri: 'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image//icons/5WqXrtYDMWbZGP70y2wAR.webp',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FaSsBC3FWVBq_U63f1ieOS.webp&w=384&q=75',
  },
  {
    title: '数码商品',
    uri: 'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image//icons/5WqXrtYDMWbZGP70y2wAR.webp',
  },
  {
    title: '时尚与服装',
    uri: 'http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FaSsBC3FWVBq_U63f1ieOS.webp&w=384&q=75',
  },
  {
    title: '数码商品',
    uri: 'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image//icons/5WqXrtYDMWbZGP70y2wAR.webp',
  },
]

export default function Categories(props) {
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">分类</Text>
        <TouchableOpacity className="flex flex-row items-center space-x-1">
          <Text className="text-neutral-400 text-base">更多</Text>
          <AntDesign name="arrowright" size={14} color="rgb(163 163 163)" />
        </TouchableOpacity>
      </View>
      <FlashList
        data={DATA}
        horizontal
        renderItem={({ item, index }) => (
          <View className="flex items-center mr-3 space-y-2" key={index}>
            <View className="w-14 h-14 rounded-full border-solid border-2 border-slate-200 overflow-hidden">
              <Image
                key={index}
                source={{
                  uri: item.uri,
                }}
                className="w-full h-full"
              />
            </View>
            <Text>{item.title}</Text>
          </View>
        )}
        estimatedItemSize={400}
      />
    </View>
  )
}
