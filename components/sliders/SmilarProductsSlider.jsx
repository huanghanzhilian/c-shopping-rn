import { FlashList } from '@shopify/flash-list'
import { Pressable, Text, View } from 'react-native'

import ProductCard from '../product/ProductCard'

const SmilarProductsSlider = props => {
  //? Props
  const { smilarProducts } = props

  //? Render(s)
  return (
    <View className="px-3 py-4 overflow-hidden">
      <Text className="mb-3 w-24">{smilarProducts.title}</Text>
      <FlashList
        data={smilarProducts?.products || []}
        renderItem={({ item, index }) => (
          <Pressable key={item._id} className="w-[80vw] px-2">
            <ProductCard className="" product={item} slide />
          </Pressable>
        )}
        horizontal
        estimatedItemSize={200}
      />
    </View>
  )
}

export default SmilarProductsSlider
