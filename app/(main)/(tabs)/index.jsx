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
  ShowWrapper,
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

  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          header: props => <FeedHeader {...props} title="Home" icon="menu-outline" />,
        }}
      />
      <ShowWrapper
        error={error}
        isError={isError}
        refetch={refetch}
        isFetching={isFetching}
        isSuccess={isSuccess}
        type="detail"
      >
        <ScrollView className="bg-white flex h-full px-3">
          <>
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
        </ScrollView>
      </ShowWrapper>
    </>
  )
}
