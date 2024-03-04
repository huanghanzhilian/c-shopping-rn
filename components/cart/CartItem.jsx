import { Link } from 'expo-router'
import { Text, View } from 'react-native'

import CartButtons from './CartButtons'
import DiscountCartItem from './DiscountCartItem'
import Icons from '../common/Icons'
import ResponsiveImage from '../common/ResponsiveImage'
import SpecialSell from '../product/SpecialSell'

import { formatNumber } from '@/utils'

const CartItem = props => {
  //? Props
  const { item } = props

  //? Render(s)
  return (
    <View className="flex flex-row px-4 py-5 space-x-4">
      {/* image & cartButtons */}
      <View className="space-y-4">
        <ResponsiveImage
          dimensions="w-28 h-28"
          imageStyles="w-28 h-28"
          source={item.img.url}
          alt={item.name}
        />

        <View className="mx-auto">
          <SpecialSell discount={item.discount} inStock={item.inStock} />
        </View>

        <View>
          <CartButtons item={item} />
        </View>
      </View>

      {/* name */}
      <View className="flex-auto">
        <Text className="mb-3 text-sm">
          <Link href={`/products/${item.productID}`}>{item.name}</Link>
        </Text>

        {/* info */}
        <View className="space-y-3">
          {item.color && (
            <View className="flex flex-row items-center gap-x-2">
              <View
                className="inline-block w-5 h-5 shadow rounded-xl"
                style={{ backgroundColor: item.color.hashCode }}
              />
              <Text>{item.color.name}</Text>
            </View>
          )}
          {item.size && (
            <View className="flex flex-row items-center gap-x-2">
              <Icons.MaterialIcons name="rule" size={20} className="icon" />
              <Text className="">{item.size.size}</Text>
            </View>
          )}
          <View className="flex flex-row items-center gap-x-2">
            <Icons.Ionicons name="shield-checkmark-outline" size={20} className="icon" />
            <Text className="font-light">正品保证和发货保证</Text>
          </View>
          <View className="flex flex-row items-center gap-x-2">
            <Icons.MaterialIcons name="save" size={20} className="icon text-sky-400" />
            <Text className="font-light">仓库有售</Text>
          </View>
          {item.discount > 0 ? (
            <View>
              <DiscountCartItem discount={item.discount} price={item.price} />
            </View>
          ) : (
            <View className="flex items-center gap-x-2">
              <Text className="text-sm text-gray-700">{formatNumber(item.price)}</Text>
              <Text className="">¥</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default CartItem
