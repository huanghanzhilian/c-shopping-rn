import { FlashList } from '@shopify/flash-list'
import { Link, router } from 'expo-router'
import { View, Image, Pressable, TouchableOpacity } from 'react-native'

import FeedSectionContainer from '../common/FeedSectionContainer'
import Skeleton from '../common/Skeleton'
import DiscountProduct from '../product/DiscountProduct'
import ProductPrice from '../product/ProductPrice'

import { useGetProductsQuery } from '@/services'

export default function DiscountSlider(props) {
  //? Props
  const { currentCategory } = props

  //? Get Products Query
  const { products, isLoading } = useGetProductsQuery(
    {
      sort: 6,
      category: currentCategory?.slug,
      page_size: 15,
      discount: true,
    },
    {
      selectFromResult: ({ data, isLoading }) => ({
        products: data?.data?.products || [],
        isLoading,
      }),
    }
  )

  //? handlers
  const handleJumptoMore = () => {
    router.push('/category')
  }

  //? Render(s)
  return (
    <FeedSectionContainer title="折扣商品" showMore onJumptoMore={handleJumptoMore}>
      {isLoading ? (
        <FlashList
          data={Array(10).fill('_')}
          renderItem={({ item, index }) => (
            <Skeleton.Items className="mr-2" key={index}>
              <Skeleton.Item
                height=" h-32 lg:h-36"
                width="w-32 lg:w-36"
                animated="background"
                className="rounded-md mx-auto"
              />
              <Skeleton.Item
                height="h-5"
                width="w-32"
                animated="background"
                className="mt-4 mx-auto"
              />
              <Skeleton.Item
                height="h-5"
                width="w-20"
                animated="background"
                className="mt-4 mx-auto"
              />
            </Skeleton.Items>
          )}
          horizontal
          estimatedItemSize={200}
        />
      ) : !products.length ? null : (
        <FlashList
          data={products}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: `/products/${item._id}`,
              }}
              key={item._id}
              asChild
            >
              <TouchableOpacity className="w-fit h-fit bg-white mx-0.5 py-3">
                <Image
                  source={{
                    uri: item?.images[0]?.url,
                  }}
                  className="w-32 h-32"
                />
                <View className="flex flex-row px-2 mt-1.5 justify-evenly items-start gap-x-2 ">
                  <DiscountProduct discount={item.discount} />
                  <ProductPrice
                    inStock={item?.inStock}
                    discount={item?.discount}
                    price={item?.price}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          )}
          horizontal
          estimatedItemSize={200}
        />
      )}
    </FeedSectionContainer>
  )
}
