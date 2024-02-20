import { AntDesign } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Skeleton from '../common/Skeleton'

import { useGetProductsQuery } from '@/services'
import { truncate } from '@/utils'

const generateGroup = (arr, countNum) => {
  const result = []
  for (let i = 0; i < arr.length; i += countNum) {
    result.push(arr.slice(i, i + countNum))
  }
  return result
}
export default function BestSellsSlider(props) {
  //? Props
  const { categorySlug } = props

  const { products, isLoading } = useGetProductsQuery(
    {
      sort: 2,
      page_size: 15,
      category: 'choiceshop',
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.data?.products ? generateGroup(data?.data?.products, 2) : [],
        isLoading,
      }),
    }
  )

  //? Render(s)

  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">畅销商品</Text>
        <TouchableOpacity className="flex flex-row items-center space-x-1">
          <Text className="text-neutral-400 text-base">更多</Text>
          <AntDesign name="arrowright" size={14} color="rgb(163 163 163)" />
        </TouchableOpacity>
      </View>
      {isLoading ? (
        Array(2)
          .fill('_')
          .map((_, index) => (
            <Skeleton.Items key={index} className="flex flex-row p-2 space-x-4">
              <Skeleton.Item
                height="h-24"
                width="w-24"
                animated="background"
                className="rounded-md "
              />
              <Skeleton.Items className="flex items-start">
                <Skeleton.Item height="h-5" width="w-52" animated="background" className="mt-4" />
                <Skeleton.Item height="h-5" width="w-36" animated="background" className="mt-4" />
              </Skeleton.Items>
            </Skeleton.Items>
          ))
      ) : (
        <FlashList
          data={products}
          renderItem={({ item, index }) => (
            <View className="mr-4">
              {item.map((row, rowIndex) => (
                <View key={rowIndex} className="px-1 py-4 w-60">
                  <View className="flex flex-row">
                    <Image
                      source={{
                        uri: row.images[0].url,
                      }}
                      className="w-24 h-24 shrink-0 mr-2"
                    />
                    <View className="flex flex-auto flex-row items-center border-b border-gray-200">
                      <Text className="text-2xl text-sky-500 mx-2">{index * 2 + rowIndex + 1}</Text>
                      <Text className="flex-auto">{truncate(row.title, 15)}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
          horizontal
          estimatedItemSize={200}
        />
      )}
    </View>
  )
}
