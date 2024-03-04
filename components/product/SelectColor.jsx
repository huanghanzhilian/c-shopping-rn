import { useAppDispatch, useAppSelector } from 'hooks'
import { Pressable, Text, View } from 'react-native'

import Icons from '../common/Icons'

import { setTempColor } from '@/store'

const SelectColor = props => {
  //? Props
  const { colors } = props

  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { tempColor } = useAppSelector(state => state.cart)

  //? Render(s)
  return (
    <View className="">
      <View className="flex flex-row justify-between p-4">
        <Text className="text-sm text-gray-700">颜色: {tempColor?.name}</Text>
        <Text className="text-sm">{colors.length} 种颜色</Text>
      </View>
      <View className="flex flex-row flex-wrap gap-3 px-5 my-3">
        {colors.map(item => (
          <Pressable
            key={item.id}
            onPress={() => dispatch(setTempColor(item))}
            className={`rounded-full py-1 px-1.5 flex gap-x-2 flex-row items-center cursor-pointer ${
              tempColor?.id === item.id ? 'border-2 border-sky-500' : ' border-2 border-gray-300'
            }`}
          >
            <View
              className="w-5 h-5 shadow-2xl rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.hashCode }}
            >
              {tempColor?.id === item.id && (
                <Icons.AntDesign
                  size={16}
                  name="checkcircleo"
                  className={`${
                    item.hashCode === '#ffffff'
                      ? 'text-gray-600'
                      : item.hashCode === '#000000'
                        ? 'text-gray-200'
                        : 'text-white'
                  } `}
                />
              )}
            </View>
            <Text>{item.name}</Text>
          </Pressable>
        ))}
      </View>
      <View className="section-divide-y" />
    </View>
  )
}

export default SelectColor
