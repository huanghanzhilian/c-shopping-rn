import { Pressable, Text, View } from 'react-native'

import Icons from '../common/Icons'

import { useDisclosure } from '@/hooks'
import { truncate } from '@/utils'

const Description = props => {
  //? Porps
  const { description } = props

  //? Assets
  const [isShowDesc, showDescHandlers] = useDisclosure()

  //? Render(s)
  return (
    <Pressable>
      <View className="px-3">
        <Text className="mb-3 lg:border-b-2 lg:border-red-500 w-fit">介绍</Text>
        <Text className="text-sm leading-6 tracking-wider text-gray-600 lg:text-sm lg:leading-8">
          {isShowDesc ? description : truncate(description, 300)}
        </Text>
        {description.length > 300 && (
          <Pressable
            className="flex flex-row items-center justify-end py-2"
            onPress={showDescHandlers.toggle}
          >
            {isShowDesc ? (
              <Text className="text-sm text-sky-400">收起</Text>
            ) : (
              <Text className="text-sm text-sky-400">查看更多</Text>
            )}
            {!isShowDesc && (
              <Icons.MaterialIcons name="keyboard-arrow-right" size={24} className="text-sky-400" />
            )}
          </Pressable>
        )}
      </View>
      <View className="section-divide-y " />
    </Pressable>
  )
}

export default Description
