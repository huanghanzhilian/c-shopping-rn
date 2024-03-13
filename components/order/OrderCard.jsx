import { Link } from 'expo-router'
import moment from 'moment-jalaali'
import { Pressable, Text, View } from 'react-native'

import Icons from '../common/Icons'
import ResponsiveImage from '../common/ResponsiveImage'

import { formatNumber } from '@/utils'

const OrderCard = props => {
  //? Props
  const { order } = props

  //? Render(s)
  return (
    <>
      <View className="py-4 space-y-3 border-b border-gray-200 lg:border lg:rounded-lg ">
        <View className="flex flex-row items-center justify-between lg:px-3">
          <View className="flex flex-row items-center gap-x-2 ">
            {order.delivered ? (
              <View className="p-0.5 w-6 h-6 bg-lime-500 text-white rounded-full flex items-center justify-center">
                <Icons.AntDesign name="checkcircleo" size={20} color="#FFFFFF" />
              </View>
            ) : (
              <View className="p-0.5 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center">
                <Icons.AntDesign name="clockcircle" size={20} color="#FFFFFF" />
              </View>
            )}
            <Text className="text-sm text-black">{order.delivered ? '完成' : '未确认'}</Text>
          </View>
          {order.delivered && (
            <Text className="">{moment(order.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</Text>
          )}
        </View>
        <View className="flex flex-row flex-wrap justify-between lg:px-3">
          <View className="flex flex-row">
            <Text>订单号:</Text>
            <Text className="ml-2 text-sm text-black">{order._id}</Text>
          </View>
          <View className="flex flex-row items-center gap-x-1">
            <Text className="text-black">
              {formatNumber(order.totalPrice - order.totalDiscount)}
            </Text>
            <Text className="">¥</Text>
          </View>
        </View>
        <View className="flex flex-row flex-wrap py-5 gap-x-5 gap-y-3 lg:border-t lg:border-gray-200 lg:px-3">
          {order.cart.map((cartItem, index) => (
            <Link href={`/products/${cartItem.productID}`} key={index} asChild>
              <Pressable>
                <ResponsiveImage
                  dimensions="w-16 h-16"
                  imageStyles="w-16 h-16"
                  source={cartItem.img.url}
                  alt={cartItem.name}
                />
              </Pressable>
            </Link>
          ))}
        </View>
      </View>
    </>
  )
}

export default OrderCard
