import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'

import { Filter, ProductCard, ProductSkeleton, Sort, SubCategories } from '@/components'
import { useGetCategoriesQuery, useGetProductsQuery } from '@/services'

export default function ProductsScreen() {
  //? Assets
  const router = useRouter()
  const params = useLocalSearchParams()

  const category = params?.category?.toString() ?? ''
  const page_size = params?.page_size?.toString() ?? ''
  const page = params?.page?.toString() ?? ''
  const sort = params?.sort?.toString() ?? ''
  const search = params?.search?.toString() ?? ''
  const inStock = params?.inStock?.toString() ?? ''
  const discount = params?.discount?.toString() ?? ''
  const price = params?.price?.toString() ?? ''

  //? Querirs
  //*    Get Products Data
  const { data, isFetching: isFetchingProduct } = useGetProductsQuery({
    category,
    page_size,
    page,
    sort,
    search,
    inStock,
    discount,
    price,
  })

  //? Handlers
  // const changeRoute = useChangeRoute()

  const handleChangeRoute = newQueries => {
    // changeRoute({
    //   ...query,
    //   page: 1,
    //   ...newQueries,
    // })
  }

  //*    Get childCategories Data
  const {
    isLoading: isLoadingCategories,
    childCategories,
    currentCategory,
  } = useGetCategoriesQuery(undefined, {
    selectFromResult: ({ isLoading, data }) => {
      const currentCategory = data?.data?.categories.find(cat => cat.slug === category)
      const childCategories = data?.data?.categories.filter(
        cat => cat.parent === currentCategory?._id
      )
      return { childCategories, isLoading, currentCategory }
    },
  })

  return (
    <>
      <Stack.Screen
        options={{
          title: params.category,
        }}
      />
      <ScrollView className="bg-white">
        <View className="flex bg-white">
          <SubCategories
            childCategories={childCategories}
            name={currentCategory?.name}
            isLoading={isLoadingCategories}
          />
          <View className="px-1">
            <View id="_products" className="w-full px-4 py-2 mt-2">
              {/* Filters & Sort */}
              <View className="divide-y-2 divide-neutral-200">
                <View className="flex flex-row py-2 gap-x-3">
                  <Filter />
                  <Sort />
                </View>

                <View className="flex flex-row justify-between py-2">
                  <Text className="text-base text-neutral-600">所有商品</Text>
                  <Text className="text-base text-neutral-600">
                    {data?.data?.productsLength} 件商品
                  </Text>
                </View>
              </View>

              {/* Products */}
              {isFetchingProduct ? (
                <ProductSkeleton />
              ) : data && data?.data?.products.length > 0 ? (
                <View className="">
                  {data?.data?.products.map(item => (
                    <ProductCard product={item} key={item._id} />
                  ))}
                </View>
              ) : (
                <Text className="text-center text-red-500">没有找到商品</Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
