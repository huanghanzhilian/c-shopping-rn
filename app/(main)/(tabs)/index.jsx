import { Link } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'

import {
  BannerOne,
  BannerTwo,
  BestSellsSlider,
  Categories,
  DiscountSlider,
  Slider as MainSlider,
  MostFavouraiteProducts,
  Search,
} from '@/components'

export default function FeedScreen() {
  return (
    <ScrollView className="bg-white ">
      <Search />
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
