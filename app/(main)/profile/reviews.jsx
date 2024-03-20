import { Stack } from 'expo-router'
import { ScrollView, View } from 'react-native'

import { ReveiwCard, ShowWrapper, EmptyCommentsList, ReveiwSkeleton } from '@/components'
import { useGetReviewsQuery } from '@/services'

const ReviewsScreen = () => {
  //*   Get Reviews
  const { data, isSuccess, isFetching, error, isError, refetch } = useGetReviewsQuery({
    page: 1,
  })

  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          title: '我的评论',
          headerBackTitleVisible: false,
        }}
      />
      <ScrollView className="bg-white">
        <ShowWrapper
          error={error}
          isError={isError}
          refetch={refetch}
          isFetching={isFetching}
          isSuccess={isSuccess}
          dataLength={data ? data?.data?.reviewsLength : 0}
          emptyComponent={<EmptyCommentsList />}
          loadingComponent={<ReveiwSkeleton />}
        >
          <View className="px-4 py-3 space-y-3 ">
            {data && data.data.reviews.map(item => <ReveiwCard key={item._id} item={item} />)}
          </View>
        </ShowWrapper>
      </ScrollView>
    </>
  )
}

export default ReviewsScreen
