import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import Icons from './common/Icons'

import { sorts } from '@/utils'

const Sort = ({ handleChangeRoute }) => {
  //? Assets

  //? State
  const [sort, setSort] = useState(sorts[0])

  //? Render(s)
  return (
    <>
      <View className=" px-3">
        <Pressable className="flex flex-row items-center gap-x-1">
          <Icons.FontAwesome5 name="sort-amount-down-alt" size={16} className="text-neutral-600" />
          <Text className="text-base text-neutral-600">{sort?.name}</Text>
        </Pressable>
      </View>
    </>
  )
}

export default Sort
