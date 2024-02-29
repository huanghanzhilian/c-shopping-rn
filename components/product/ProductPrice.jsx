import { Text, View } from 'react-native'

import DiscountProduct from './DiscountProduct'

import { formatNumber } from '@/utils'

const ProductPrice = props => {
  //? Props
  const { singleProduct, inStock, discount, price } = props

  //? Render(s)
  return (
    <View className={`${(singleProduct && 'flex flex-col-reverse') || ''}`}>
      <View className="flex flex-row items-center self-end">
        <Text className="text-sm text-gray-700">
          {formatNumber(price - (discount * price) / 100)}
        </Text>
        <Text className="ml-1">¥</Text>
      </View>

      {discount > 0 && (
        <View className="flex flex-row">
          {singleProduct && discount > 0 && inStock !== 0 && (
            <DiscountProduct discount={discount} />
          )}
          <Text className="ml-2 text-sm text-gray-500 line-through">
            {formatNumber(price)}
            <Text className="ml-1">¥</Text>
          </Text>
        </View>
      )}
    </View>
  )
}

export default ProductPrice
