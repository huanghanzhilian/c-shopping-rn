import { yupResolver } from '@hookform/resolvers/yup'
import Slider from '@react-native-community/slider'
import { nanoid } from '@reduxjs/toolkit'
import { useLocalSearchParams, router } from 'expo-router'
import Stack from 'expo-router/stack'
import { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { View, Text, ScrollView, Pressable, TextInput } from 'react-native'

import { HandleResponse, Icons, SubmitModalBtn, TextField } from '@/components'
import { useCreateReviewMutation } from '@/services'
import { ratingStatus, reviewSchema } from '@/utils'

export default function ReviewCommentScreen() {
  //? Assets
  const { prdouctID, productTitle, numReviews } = useLocalSearchParams()

  //? Refs
  const [positiveValue, setPositiveValue] = useState('')
  const [negativeValue, setNegativeValue] = useState('')

  //? State
  const [rating, setRating] = useState(5)

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

  const {
    fields: positivePointsFields,
    append: appentPositivePoint,
    remove: removePositivePoint,
  } = useFieldArray({
    name: 'positivePoints',
    control,
  })

  const {
    fields: negativePointsFields,
    append: appendNegativePoint,
    remove: removeNegativePoint,
  } = useFieldArray({
    name: 'negativePoints',
    control,
  })

  //? Create Review Query
  const [createReview, { isSuccess, isLoading, data, isError, error }] = useCreateReviewMutation()

  //? Handlers
  const handleAddPositivePoint = () => {
    if (positiveValue) {
      appentPositivePoint({ id: nanoid(), title: positiveValue })
      setPositiveValue('')
    }
  }

  const handleAddNegativePoint = () => {
    if (negativeValue) {
      appendNegativePoint({ id: nanoid(), title: negativeValue })
      setNegativeValue('')
    }
  }

  const submitHander = data =>
    createReview({
      body: { ...data, rating, product: prdouctID },
    })

  return (
    <>
      <Stack.Screen
        options={{
          title: `填写评价，${productTitle}`,
          headerBackTitleVisible: false,
        }}
      />
      {/* Handle Create Review Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={() => {
            reset()
            setRating(1)
            router.back()
          }}
          onError={() => {}}
        />
      )}
      <ScrollView className="bg-white">
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
                disabled={false}
                maximumTrackTintColor="#CCCCCC"
              />
              <View className="flex flex-row justify-between">
                {Array(5)
                  .fill('_')
                  .map((_, i) => (
                    <View key={i} className="h-1 w-1 rounded-full bg-gray-300 inline-block" />
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

            {/* positivePoints */}
            <View className="space-y-3">
              <View className="space-y-3">
                <Text className="text-xs text-gray-700">优点</Text>
                <View className="flex flex-row items-center input w-full px-3 py-2.5 transition-colors border border-gray-200 rounded-md outline-none bg-zinc-50/30 focus:border-blue-600 leading-none">
                  <TextInput
                    className=" flex-auto"
                    type="text"
                    name="positivePoints"
                    id="positivePoints"
                    value={positiveValue}
                    onChangeText={value => {
                      setPositiveValue(value)
                    }}
                  />
                  <Pressable onPress={handleAddPositivePoint}>
                    <Icons.AntDesign size={16} name="plus" className="icon" />
                  </Pressable>
                </View>
              </View>
              {positivePointsFields.length > 0 && (
                <View className="space-y-3">
                  {positivePointsFields.map((field, index) => (
                    <View key={field.id} className="flex flex-row items-center px-3 gap-x-4">
                      <Icons.AntDesign size={16} name="plus" className="text-green-500 icon" />
                      <Text className="flex-auto">{field.title}</Text>
                      <Pressable>
                        <Icons.AntDesign
                          size={16}
                          name="delete"
                          className="icon text-gray"
                          onPress={() => removePositivePoint(index)}
                        />
                      </Pressable>
                    </View>
                  ))}
                </View>
              )}
            </View>

            {/* negativePoints */}
            <View className="space-y-3">
              <View className="space-y-3">
                <Text className="text-xs text-gray-700">缺点</Text>
                <View className="flex flex-row items-center input w-full px-3 py-2.5 transition-colors border border-gray-200 rounded-md outline-none bg-zinc-50/30 focus:border-blue-600 leading-none">
                  <TextInput
                    className=" flex-auto"
                    type="text"
                    name="negativePoints"
                    id="negativePoints"
                    value={negativeValue}
                    onChangeText={value => {
                      setNegativeValue(value)
                    }}
                  />
                  <Pressable onPress={handleAddNegativePoint}>
                    <Icons.AntDesign size={16} name="plus" className="icon" />
                  </Pressable>
                </View>
              </View>
              {negativePointsFields.length > 0 && (
                <View className="space-y-3">
                  {negativePointsFields.map((field, index) => (
                    <View key={field.id} className="flex flex-row items-center px-3 gap-x-4">
                      <Icons.AntDesign size={16} name="minus" className="text-red-500 icon" />
                      <Text className="flex-auto">{field.title}</Text>
                      <Pressable>
                        <Icons.AntDesign
                          size={16}
                          name="delete"
                          className="icon text-gray"
                          onPress={() => removeNegativePoint(index)}
                        />
                      </Pressable>
                    </View>
                  ))}
                </View>
              )}
            </View>

            {/* comment */}
            <View>
              <TextField
                label="评价文字"
                control={control}
                errors={formErrors.comment}
                name="comment"
              />
            </View>
            <View className="py-3">
              <SubmitModalBtn onPress={handleSubmit(submitHander)} isLoading={isLoading}>
                提交评价
              </SubmitModalBtn>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
