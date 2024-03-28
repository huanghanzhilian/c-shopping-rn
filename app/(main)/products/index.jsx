import { FlashList } from '@shopify/flash-list'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useMemo } from 'react'
import { View, Text, ScrollView, Pressable, FlatList } from 'react-native'

import { Filter, ProductCard, ProductSkeleton, Sort, SubCategories } from '@/components'
import { useChangeRoute } from '@/hooks'
import { useGetCategoriesQuery, useGetProductsQuery } from '@/services'

export default function ProductsScreen() {
  //? Assets
  const router = useRouter()
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
  const { data: lastResult } = useGetProductsQuery(
    {
      category,
      page_size,
      page: page - 1,
      sort,
      search,
      inStock,
      discount,
      price,
    },
    { skip: page === 1 }
  )
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
  const { data: nextResult } = useGetProductsQuery({
    category,
    page_size,
    page: page + 1,
    sort,
    search,
    inStock,
    discount,
    price,
  })

  const combined = useMemo(() => {
    const arr = new Array(page_size * (page + 1))
    console.log('123', [lastResult?.data, data?.data, nextResult?.data])
    for (const datas of [lastResult?.data, data?.data, nextResult?.data]) {
      if (datas) {
        const { currentPage, nextPage, previousPage, hasNextPage, hasPreviousPage, lastPage } =
          datas?.pagination

        arr.splice(currentPage * 10, datas?.products?.length, ...datas?.products)
      }
    }
    console.log('arraaaa', arr)
    return arr
  }, [page_size, page, lastResult, data, nextResult])

  console.log('combined', combined)

  //? Handlers
  const changeRoute = useChangeRoute()

  const onEndReachedThreshold = () => {
    // const { currentPage, nextPage, previousPage, hasNextPage, hasPreviousPage, lastPage } =
    //   nextResult?.data?.pagination
    // console.log('down')
    // if (!hasNextPage || isFetchingProduct) return
    // changeRoute({
    //   page: Number(page) + 1,
    // })
  }

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
            <View id="_products" className="w-full h-full px-4 py-2 mt-2">
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
              {isFetchingProduct && page === 1 ? (
                <ProductSkeleton />
              ) : data && data?.data?.products.length > 0 ? (
                <View className="">
                  {data?.data?.products.map(item => (
                    <ProductCard product={item} key={item._id} />
                  ))}
                </View>
              ) : (
                // <FlashList
                //   data={combined}
                //   renderItem={({ item, index }) => <ProductCard product={item} key={item._id} />}
                //   onEndReached={onEndReachedThreshold}
                //   onEndReachedThreshold={0.5}
                //   estimatedItemSize={200}
                // />
                // <View className="">
                //   {data?.data?.products.map(item => (
                //     <ProductCard product={item} key={item._id} />
                //   ))}
                // </View>
                <Text className="text-center text-red-500">没有找到商品</Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
