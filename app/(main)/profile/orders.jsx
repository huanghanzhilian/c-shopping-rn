import { Stack } from 'expo-router'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { OrderCard, ShowWrapper, EmptyOrdersList, OrderSkeleton } from '@/components'
import { useGetOrdersQuery } from '@/services'

const OrdersScreen = () => {
  //? Assets

  //? Get Orders Data
  const { data, isSuccess, isFetching, error, isError, refetch } = useGetOrdersQuery({
    pageSize: 10,
    page: 1,
  })

  //? Render
  return (
    <>
      <Stack.Screen
        options={{
          title: '我的订单',
          headerBackTitleVisible: false,
        }}
      />
      <ScrollView className="bg-white">
        {/* <OrderSkeleton /> */}
        {/* <EmptyOrdersList /> */}
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
          <View className="px-4 py-3 space-y-3">
            {data?.data?.orders.map(item => (
              <OrderCard key={item._id} order={item} />
            ))}
          </View>
        </ShowWrapper>
      </ScrollView>
    </>
  )
}
export default OrdersScreen
