import { yupResolver } from '@hookform/resolvers/yup'
import Slider from '@react-native-community/slider'
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router'
import Stack from 'expo-router/stack'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { View, Text, ScrollView } from 'react-native'
import { ratingStatus, reviewSchema } from 'utils'

import { TextField } from '@/components'

export default function ReviewCommentScreen() {
  //? Assets
  const { prdouctID, productTitle, numReviews } = useLocalSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  //? State
  const [rating, setRating] = useState(1)

  //? Form Hook
  const {
    handleSubmit,
    register,
    formState: { errors: formErrors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(reviewSchema),
    defaultValues: {
      comment: '',
      title: '',
      positivePoints: [],
      negativePoints: [],
      rating: 1,
      product: '',
    },
  })

  return (
    <>
      <Stack.Screen
        options={{
          title: productTitle,
          headerBackTitleVisible: false,
        }}
      />
      <ScrollView className=" bg-red-300">
        <View className="bg-white">
          <View className="flex flex-col justify-between flex-1 p-4 gap-y-5">
            {/* rating */}
            <View>
              <View className="my-2 flex flex-row justify-center text-center">
                <Text className="text-sm text-black">评分!:‌</Text>
                <Text className="px-1 text-sm text-sky-500">{ratingStatus[rating]}</Text>
              </View>
              <Slider
                step={1}
                maximumValue={5}
                minimumValue={1}
                style={{ width: '100%' }}
                value={rating}
                onValueChange={value => {
                  setRating(value)
                }}
                thumbTintColor="#1411AB"
                disabled={false}
                maximumTrackTintColor="red"
                minimumTrackTintColor="#CCCCCC"
              />
              <View className="flex flex-row justify-between">
                {Array(5)
                  .fill('_')
                  .map((_, i) => (
                    <View
                      key={i}
                      className="h-1 w-1 rounded-full mx-1.5 bg-gray-300 inline-block"
                    />
                  ))}
              </View>
            </View>

            {/* title */}
            <View>
              <TextField
                label="评价标题"
                control={control}
                errors={formErrors.title}
                name="title"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
