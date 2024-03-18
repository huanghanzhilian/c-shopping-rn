import { Fragment, useState } from 'react'
import { Text, View } from 'react-native'

import Icons from '../common/Icons'
import ResponsiveImage from '../common/ResponsiveImage'

import { useEditReviewMutation } from '@/services'

const ReveiwCard = props => {
  //? Props
  const { item } = props

  //? States
  const [status, setStatus] = useState(item.status)

  //? Edit Review Query
  const [editReview, { data, isSuccess, isError, error }] = useEditReviewMutation()

  //? Render(s)
  return (
    <>
      <View className="flex flex-row py-4 space-y-3 border-b border-gray-200 gap-x-3">
        {/* image */}
        <View>
          <ResponsiveImage
            dimensions="w-16 h-12"
            imageStyles="w-16 h-12"
            source={item.product.images[0].url}
            alt=""
          />

          <View
            className={`w-5 h-5 text-center pt-0.5 inline-block rounded-md ml-10 mt-2  ${
              item.rating <= 2 ? 'bg-red-500' : item.rating === 3 ? 'bg-amber-500' : 'bg-green-500'
            }`}
          >
            <Text className="text-white text-center">{item.rating}</Text>
          </View>
        </View>

        <View className="flex-1 ">
          {/* header */}
          <View className="flex pb-1 border-b border-gray-100 justify-between gap-y-2">
            <Text className="pt-2">{item.title}</Text>
            <View className="flex flex-row items-center justify-between">
              <View
                className={`flex flex-row w-fit items-center p-1 rounded-md ${
                  status === 1 ? 'bg-amber-100 ' : status === 2 ? 'bg-green-100 ' : 'bg-red-100 '
                } `}
              >
                {status === 1 ? (
                  <View className="bg-amber-500 rounded-full p-0.5 icon">
                    <Icons.AntDesign name="clockcircle" size={16} className="text-white" />
                  </View>
                ) : status === 2 ? (
                  <View className="rounded-full p-0.5 bg-green-500 icon">
                    <Icons.AntDesign name="checkcircle" size={16} className="text-white" />
                  </View>
                ) : (
                  <View className="rounded-full p-0.5 icon bg-red-500">
                    <Icons.Entypo name="circle-with-cross" size={16} className="text-white" />
                  </View>
                )}
                <Text
                  className={`ml-2 ${
                    status === 1
                      ? 'text-amber-500'
                      : status === 2
                        ? 'text-green-500'
                        : 'text-red-500'
                  }`}
                >
                  {status === 1 ? '等待确认' : status === 2 ? '已经确认' : '不见了'}
                </Text>
              </View>
              <Icons.Feather name="more-vertical" size={18} />
            </View>
          </View>

          {/* content */}
          <View className="py-4 space-y-2">
            <Text>{item.comment}</Text>
            <View>
              {item.positivePoints.map(point => (
                <View className="flex flex-row items-center gap-x-1" key={point.id}>
                  <Icons.AntDesign name="plus" size={20} className="text-green-400 icon" />
                  <Text>{point.title}</Text>
                </View>
              ))}
            </View>
            <View>
              {item.negativePoints.map(point => (
                <View className="flex flex-row items-center gap-x-1" key={point.id}>
                  <Icons.AntDesign name="minus" size={20} className="text-red-400 icon" />
                  <Text>{point.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default ReveiwCard
