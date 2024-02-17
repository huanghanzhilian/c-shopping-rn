import { Link, Stack } from 'expo-router'
import { View, Text, ScrollView, Image } from 'react-native'

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
  FeedHeader,
} from '@/components'

export default function FeedScreen() {
  return (
    <ScrollView className="bg-white ">
      <Stack.Screen
        options={{
          header: props => <FeedHeader {...props} title="Home" icon="menu-outline" />,
        }}
      />
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
