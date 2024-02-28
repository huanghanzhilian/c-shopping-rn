import { Pressable, Text, View } from 'react-native'

import Icons from '../common/Icons'

const Filter = ({ handleChangeRoute }) => {
  //? Assets

  //? Render(s)
  return (
    <>
      <View className=" px-3">
        <Pressable className="flex flex-row items-center gap-x-1">
          <Icons.Ionicons name="filter" size={16} className="text-neutral-600" />
          <Text className="text-base text-neutral-600">筛选</Text>
        </Pressable>
      </View>
    </>
  )
}

export default Filter
