import moment from 'moment-jalaali'
import { Text, View } from 'react-native'

import Icons from '../common/Icons'

const ReviewProductCard = props => {
  //? Props
  const { item } = props

  //? Render(s)
  return (
    <View className="flex flex-row py-3">
      <Text
        className={`w-5 h-5 text-center pt-0.5 inline-block rounded-md text-white  ${
          item.rating <= 2 ? 'bg-red-500' : item.rating === 3 ? 'bg-amber-500' : 'bg-green-500'
        }`}
      >
        {item.rating}
      </Text>
      <View className="flex-1 px-2.5 space-y-3 lg:px-6">
        <View className="w-full flex flex-row items-center border-b border-gray-100">
          <Text className="mb-1">{item.title}</Text>
          <Text className="text-xs">{moment(item.updatedAt).format('YYYY-MM-DD')}</Text>
          <View className="inline-block w-1 h-1 mx-3 bg-gray-400 rounded-full" />
          <Text className="text-xs">{item.user?.name}</Text>
        </View>

        <Text>{item.comment}</Text>

        {item.positivePoints.length > 0 && (
          <View>
            {item.positivePoints.map(point => (
              <View className="flex flex-row items-center gap-x-1" key={point.id}>
                <Icons.AntDesign size={16} name="plus" className="text-green-400 icon" />
                <Text>{point.title}</Text>
              </View>
            ))}
          </View>
        )}

        {item.positivePoints.length > 0 && (
          <View>
            {item.negativePoints.map(point => (
              <View className="flex flex-row items-center gap-x-1" key={point.id}>
                <Icons.AntDesign size={16} name="minus" className="text-red-400 icon" />
                <Text>{point.title}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  )
}

export default ReviewProductCard
