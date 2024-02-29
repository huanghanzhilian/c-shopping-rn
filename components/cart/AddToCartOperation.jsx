import { View } from 'react-native'

import { Button } from '../common/Buttons'
import ProductPrice from '../product/ProductPrice'

const AddToCartOperation = props => {
  //? Props
  const { product } = props

  //? Render(s)
  return (
    <View className="flex flex-row items-center justify-between p-3 bg-white border-t border-gray-300 sm:px-5 lg:py-3 lg:p-0 shadow-3xl lg:sticky lg:flex-col-reverse lg:top-32 lg:bg-gray-100 lg:gap-y-4 lg:border-t-0 lg:shadow-none">
      <Button className="px-12 text-sm lg:w-full btn">添加到购物车</Button>

      <View className="lg:self-end min-w-fit">
        <ProductPrice
          inStock={product.inStock}
          discount={product.discount}
          price={product.price}
          singleProduct
        />
      </View>
    </View>
  )
}

export default AddToCartOperation
