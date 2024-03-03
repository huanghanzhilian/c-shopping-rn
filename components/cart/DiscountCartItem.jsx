import { Text, View } from 'react-native'

import { formatNumber } from '@/utils'

const DiscountCartItem = props => {
  //? Props
  const { discount, price } = props

  //? Assets
  const discountPercent = discount / 100

  //? Render(s)
  return (
    <View>
      <View className="flex flex-row items-center gap-x-1">
        <Text className="text-red-500">{formatNumber(+(price * discountPercent).toFixed())}</Text>
        <Text className="text-red-500">¥</Text>

        <Text className="text-red-500">折扣</Text>
      </View>
      <View className="flex flex-row items-center gap-x-2">
        <Text className="text-sm text-gray-700">
          {formatNumber(price - (discount * price) / 100)}
        </Text>
        <Text className="">¥</Text>
      </View>
    </View>
  )
}

export default DiscountCartItem
