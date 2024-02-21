import { Stack } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

import {
  BannerOne,
  BannerTwo,
  BestSellsSlider,
  Categories,
  DiscountSlider,
  Slider as MainSlider,
  MostFavouraiteProducts,
  FeedHeader,
  Loading,
} from '@/components'
import { useGetFeedInfoQuery } from '@/services'

export default function FeedScreen() {
  //? Assets

  //? Get Feeds Query
  const {
    data: { childCategories, currentCategory, sliders, bannerOneType, bannerTwoType },
    isLoading,
    isSuccess,
    isFetching,
    error,
    isError,
    refetch,
  } = useGetFeedInfoQuery(
    {},
    {
      selectFromResult: ({ data, ...args }) => ({
        data: data?.data || {},
        ...args,
      }),
    }
  )
  // console.log('isLoading', isLoading)
  // console.log('sliders', sliders)

  //? Render(s)
  return (
    <ScrollView className="bg-white flex h-full px-3">
      <Stack.Screen
        options={{
          header: props => <FeedHeader {...props} title="Home" icon="menu-outline" />,
        }}
      />
      {!isSuccess ? (
        <View>
          <Text>loading</Text>
        </View>
      ) : (
        <>
          <Loading />
          <MainSlider data={sliders} />

          <Categories
            childCategories={{ categories: childCategories, title: '所有分类' }}
            color={currentCategory?.colors?.start}
            name={currentCategory?.name}
            homePage
          />
          <DiscountSlider currentCategory={currentCategory} />
          <BannerOne data={bannerOneType} />
          <BestSellsSlider categorySlug={currentCategory?.slug} />
          <BannerTwo data={bannerTwoType} />
          <MostFavouraiteProducts categorySlug={currentCategory?.slug} />
        </>
      )}
    </ScrollView>
  )
}
