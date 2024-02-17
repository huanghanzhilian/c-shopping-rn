import { Link } from 'expo-router'
import { View, Text, ScrollView } from 'react-native'

import {
  BannerOne,
  BannerTwo,
  BestSellsSlider,
  Categories,
  DiscountSlider,
  Logo,
  Slider as MainSlider,
  MostFavouraiteProducts,
  Search,
} from '@/components'

export default function FeedScreen() {
  return (
    <ScrollView className="bg-white ">
      <Logo />
      <Logo width={120} height={40} />
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
