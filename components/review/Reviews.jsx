import { router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

import ReviewProductCard from './ReviewProductCard'
import Icons from '../common/Icons'
import ShowWrapper from '../common/ShowWrapper'
import EmptyComment from '../emptyList/EmptyComment'
import ReveiwSkeleton from '../skeleton/ReveiwSkeleton'

import { useUserInfo } from '@/hooks'
import { useGetProductReviewsQuery } from '@/services'

const Reviews = props => {
  //? Props
  const { numReviews, prdouctID, productTitle } = props

  //? Assets
  const { mustAuthAction } = useUserInfo()

  //? Get Product-Reviews Query
  const { data, isSuccess, isFetching, error, isError, refetch } = useGetProductReviewsQuery(
    {
      id: prdouctID,
      page: 1,
    },
    { skip: !(numReviews > 0) }
  )

  //? Handlers
  const handleOpenComment = () => {
    mustAuthAction(() => {
      router.push({ pathname: `/review/comment`, params: { prdouctID, productTitle, numReviews } })
    })
  }

  //? Render(s)
  return (
    <>
      <View className="px-3 py-3 space-y-4" id="_productReviews">
        <View className="flex flex-row items-center justify-between">
          <Text className="">商品评价</Text>
          <Text className="text-xs text-sky-500">{numReviews} 条评价</Text>
        </View>
        <View className="mb-2">
          <Pressable
            onPress={handleOpenComment}
            className="flex flex-row justify-between items-center w-full"
          >
            <Icons.EvilIcons name="comment" size={24} className="icon" />
            <Text className="text-sm text-black ml-2">写下您对该商品的评价</Text>
            <Icons.MaterialIcons name="keyboard-arrow-right" size={24} className="ml-auto icon" />
          </Pressable>
          <Text className="mt-6 text-xs text-gray-500">提交确认后，通过将赠送积分。</Text>
        </View>
        <ShowWrapper
          error={error}
          isError={isError}
          refetch={refetch}
          isFetching={isFetching}
          isSuccess={isSuccess}
          dataLength={data ? data?.data?.reviewsLength : 0}
          emptyComponent={<EmptyComment />}
          loadingComponent={<ReveiwSkeleton />}
        >
          <View className="py-3 space-y-4 divide-y-2 px-2">
            {data?.data?.reviews?.map(item => (
              <ReviewProductCard item={item} key={item._id} />
            ))}
          </View>
        </ShowWrapper>
      </View>
    </>
  )
}

export default Reviews
