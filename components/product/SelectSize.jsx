import { Pressable, Text, View } from 'react-native'

import { useAppDispatch, useAppSelector } from '@/hooks'
import { setTempSize } from '@/store'
import { formatNumber } from '@/utils'

const SelectSize = props => {
  //? Props
  const { sizes } = props

  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { tempSize } = useAppSelector(state => state.cart)

  //? Render(s)
  return (
    <View className="">
      <View className="flex flex-row justify-between p-4">
        <Text className="text-sm text-gray-700">尺寸: {tempSize?.size}</Text>
        <Text className="text-sm">{formatNumber(sizes.length)} 种尺寸</Text>
      </View>
      <View className="flex flex-row flex-wrap gap-y-3 space-x-3 px-5 my-3">
        {sizes.map(item => (
          <Pressable
            key={item.id}
            onPress={() => dispatch(setTempSize(item))}
            className={`rounded-full py-1.5 px-2 flex items-center cursor-pointer  ${
              tempSize?.id === item.id ? 'border-2 border-sky-500' : ' border-2 border-gray-300'
            }`}
          >
            <Text>{item.size}</Text>
          </Pressable>
        ))}
      </View>
      <View className="section-divide-y" />
    </View>
  )
}

export default SelectSize
