import { Stack } from 'expo-router'
import { ScrollView } from 'react-native'

import {
  BannerOne,
  BannerTwo,
  BestSellsSlider,
  Categories,
  DiscountSlider,
  Slider as MainSlider,
  MostFavouraiteProducts,
  FeedHeader,
} from '@/components'

export default function FeedScreen() {
  return (
    <ScrollView className="bg-white flex h-full px-3">
      <Stack.Screen
        options={{
          header: props => <FeedHeader {...props} title="Home" icon="menu-outline" />,
        }}
      />

      <MainSlider />
      <Categories />
      <DiscountSlider />
      <BannerOne />
      <BestSellsSlider />
      <BannerTwo />
      <MostFavouraiteProducts />
    </ScrollView>
  )
}
