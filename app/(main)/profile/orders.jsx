import { FlashList } from '@shopify/flash-list'
import { Stack } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { OrderCard, ShowWrapper, EmptyOrdersList, OrderSkeleton } from '@/components'
import { useGetOrdersQuery } from '@/services'

const OrdersScreen = () => {
  //? Assets
  const [page, setPage] = useState(1)

  //? Get Orders Data
  const { data, hasNextPage, isSuccess, isFetching, error, isError, refetch } = useGetOrdersQuery(
    {
      pageSize: 5,
      page,
    },
    {
      selectFromResult: ({ data, ...args }) => {
        console.log('...args', { ...args })
        return {
          hasNextPage: data?.data?.pagination?.hasNextPage ?? false,
          data,
          ...args,
        }
      },
    }
  )

  console.log('data', data)

  //? Handlers
  const onEndReachedThreshold = () => {
    if (!hasNextPage) return
    setPage(Number(page) + 1)
  }

  //? Render
  return (
    <>
      <Stack.Screen
        options={{
          title: '我的订单',
          headerBackTitleVisible: false,
        }}
      />
      <ShowWrapper
        error={error}
        isError={isError}
        refetch={refetch}
        isFetching={isFetching}
        isSuccess={isSuccess}
        dataLength={data ? data?.data?.ordersLength : 0}
        emptyComponent={<EmptyOrdersList />}
        loadingComponent={<OrderSkeleton />}
      >
        <View className="px-4 py-3 space-y-3 h-full bg-white">
          <FlashList
            data={data?.data?.orders}
            renderItem={({ item, index }) => <OrderCard key={item._id} order={item} />}
            onEndReached={onEndReachedThreshold}
            onEndReachedThreshold={0}
            estimatedItemSize={200}
          />
          {/* {data?.data?.orders.map(item => (
              <OrderCard key={item._id} order={item} />
            ))} */}
        </View>
      </ShowWrapper>
    </>
  )
}
export default OrdersScreen
