import { router, Stack } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'

import { AuthWrapper, Button, CartInfo, CartItem, EmptyCart } from '@/components'
import { useAppSelector, useUserInfo } from '@/hooks'
import { formatNumber } from '@/utils'

export default function CartScreen() {
  //? Get User Data
  const { userInfo, mustAuthAction } = useUserInfo()

  //? Store
  const { cartItems, totalItems, totalPrice, totalDiscount } = useAppSelector(state => state.cart)

  //? Handlers
  const handleRoute = () => {
    mustAuthAction(() => {
      router.push({ pathname: `/payment`, params: {} })
    })
  }

  //? Render(s)

  return (
    <>
      <Stack.Screen
        options={{
          title: `Cart(${cartItems.length} items)`,
          headerBackTitleVisible: false,
        }}
      />
      <AuthWrapper>
        {cartItems.length === 0 ? (
          <>
            <View className=" h-full space-y-3 bg-white">
              <View className="py-20">
                <EmptyCart className="mx-auto h-52 w-52" />
                <Text className="text-base font-bold text-center">您的购物车是空的！</Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <ScrollView className="bg-white">
              <View className="py-4 mb-20 space-y-3">
                {/* title */}
                <View className="h-fit">
                  <View className="flex flex-row justify-between px-4">
                    <View>
                      <Text className="mb-2 text-sm font-bold">您的购物车</Text>
                    </View>
                    <Text className="">{formatNumber(totalItems)} 件商品</Text>
                  </View>

                  {/* carts */}
                  <View className="divide-y">
                    {cartItems.map(item => (
                      <CartItem item={item} key={item.itemID} />
                    ))}
                  </View>
                </View>
                <View className="section-divide-y h-2 bg-gray-100" />
                {/* cart Info */}
                <View className="">
                  <View className="">
                    <CartInfo handleRoute={handleRoute} cart />
                  </View>
                </View>
              </View>
            </ScrollView>
            {/* to Shipping */}
            <View className="fixed bottom-0 left-0 right-0 z-10 flex flex-row items-center justify-between px-3 py-3 bg-white border-t border-gray-300 shadow-3xl lg:hidden">
              <View>
                <Text className="font-light">总计购物车</Text>
                <View className="flex flex-row items-center">
                  <Text className="text-sm">{formatNumber(totalPrice - totalDiscount)}</Text>
                  <Text className="ml-1">¥</Text>
                </View>
              </View>
              <Button className="w-1/2" onPress={handleRoute}>
                继续
              </Button>
            </View>
          </>
        )}
      </AuthWrapper>
    </>
  )
}
