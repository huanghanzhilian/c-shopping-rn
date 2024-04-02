import { FlashList } from '@shopify/flash-list'
import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

import { Filter, ProductCard, ProductSkeleton, Sort, SubCategories } from '@/components'
import { useChangeRoute } from '@/hooks'
import { useGetCategoriesQuery, useGetProductsQuery } from '@/services'

export default function ProductsScreen() {
  //? Assets
  const params = useLocalSearchParams()

  const category = params?.category?.toString() ?? ''
  const page_size = params?.page_size?.toString() ?? 10
  const page = params?.page?.toString() ?? 1
  const sort = params?.sort?.toString() ?? ''
  const search = params?.search?.toString() ?? ''
  const inStock = params?.inStock?.toString() ?? ''
  const discount = params?.discount?.toString() ?? ''
  const price = params?.price?.toString() ?? ''

  //? Querirs
  //*    Get Products Data

  const {
    data,
    hasNextPage,
    isFetching: isFetchingProduct,
  } = useGetProductsQuery(
    {
      category,
      page_size,
      page,
      sort,
      search,
      inStock,
      discount,
      price,
    },
    {
      selectFromResult: ({ data, ...args }) => ({
        hasNextPage: data?.data?.pagination?.hasNextPage ?? false,
        data,
        ...args,
      }),
    }
  )

  //? Handlers
  const changeRoute = useChangeRoute()

  const onEndReachedThreshold = () => {
    if (!hasNextPage) return
    changeRoute({
      page: Number(page) + 1,
    })
  }

  const handleChangeRoute = newQueries => {
    changeRoute({
      ...params,
      page: 1,
      ...newQueries,
    })
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
      <View className="bg-white h-full flex">
        <SubCategories
          childCategories={childCategories}
          name={currentCategory?.name}
          isLoading={isLoadingCategories}
        />
        <View className="px-1 flex-1">
          <View id="_products" className="w-full h-[100%] flex px-4 py-2 mt-2">
            {/* Filters & Sort */}
            <View className="divide-y-2 divide-neutral-200">
              <View className="flex flex-row py-2 gap-x-3">
                <Filter
                  mainMaxPrice={data?.data?.mainMaxPrice}
                  mainMinPrice={data?.data?.mainMinPrice}
                  handleChangeRoute={handleChangeRoute}
                />
                <Sort handleChangeRoute={handleChangeRoute} />
              </View>

              <View className="flex flex-row justify-between py-2">
                <Text className="text-base text-neutral-600">所有商品</Text>

                <Text className="text-base text-neutral-600">
                  {data?.data?.productsLength} 件商品
                </Text>
              </View>
            </View>
            {/* Products */}
            {isFetchingProduct && page === 1 && <ProductSkeleton />}
            {data && data?.data?.products.length > 0 ? (
              <FlashList
                data={data?.data?.products}
                renderItem={({ item, index }) => <ProductCard product={item} key={item._id} />}
                onEndReached={onEndReachedThreshold}
                onEndReachedThreshold={0}
                estimatedItemSize={200}
              />
            ) : (
              <Text className="text-center text-red-500">没有找到商品</Text>
            )}
          </View>
        </View>
      </View>
    </>
  )
}
