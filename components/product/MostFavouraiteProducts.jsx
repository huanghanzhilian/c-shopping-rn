import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import DiscountProduct from './DiscountProduct'
import ProductPrice from './ProductPrice'
import Skeleton from '../common/Skeleton'

import { useGetProductsQuery } from '@/services'

export default function MostFavouraiteProducts(props) {
  //? Props
  const { categorySlug } = props

  const { products, isLoading } = useGetProductsQuery(
    {
      sort: 5,
      category: 'choiceshop',
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.data?.products,
        isLoading,
      }),
    }
  )

  //? Render(s)
  return (
    <View className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">热销商品</Text>
        <TouchableOpacity className="flex flex-row items-center space-x-1">
          <Text className="text-neutral-400 text-base">更多</Text>
          <AntDesign name="arrowright" size={14} color="rgb(163 163 163)" />
        </TouchableOpacity>
      </View>
      <View className="w-full flex flex-row flex-wrap">
        {isLoading
          ? Array(10)
              .fill('_')
              .map((_, index) => (
                <Skeleton.Items
                  key={index}
                  className={`w-[49%] mr-[2%] mb-2 p-1 ${index % 2 === 1 ? 'mr-0' : ''}`}
                >
                  <Skeleton.Item
                    height="h-32 md:h-36"
                    width="w-28 md:w-32"
                    animated="background"
                    className="rounded-md mx-auto"
                  />
                  <Skeleton.Item
                    height="h-5"
                    width="w-32"
                    animated="background"
                    className="mt-4 mx-auto"
                  />
                  <Skeleton.Item
                    height="h-5"
                    width="w-20"
                    animated="background"
                    className="mt-4 mx-auto"
                  />
                </Skeleton.Items>
              ))
          : products?.map((product, index) => (
              <TouchableOpacity
                key={product._id}
                className={`w-[49%] mr-[2%] mb-2 p-1 transition border border-gray-50 ${index % 2 === 1 ? 'mr-0' : ''}`}
              >
                <View className="flex flex-row gap-x-2 ">
                  <Text className="text-base">{product.rating.toFixed(1)}</Text>
                  <FontAwesome name="star" size={24} color="rgb(251 191 36)" />
                </View>
                <Image
                  source={{
                    uri: product.images[0].url,
                  }}
                  className="h-32 w-28 my-3 mx-auto"
                />
                <View
                  className={`flex flex-row items-start mt-2 gap-x-2 ${
                    product.discount ? 'justify-evenly' : 'justify-end pl-8'
                  }`}
                >
                  {product.discount ? <DiscountProduct discount={product.discount} /> : null}
                  <ProductPrice
                    inStock={product.inStock}
                    discount={product.discount}
                    price={product.price}
                  />
                </View>
              </TouchableOpacity>
            ))}
      </View>
    </View>
  )
}
