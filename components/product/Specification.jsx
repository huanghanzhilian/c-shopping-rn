import { Pressable, Text, View, useWindowDimensions } from 'react-native'
import RenderHtml from 'react-native-render-html'

import Icons from '../common/Icons'

import { useDisclosure } from '@/hooks'

const Specification = props => {
  //? Props
  const { specification } = props

  //? Assets
  const { width } = useWindowDimensions()

  //? Assets
  const [isShowSpec, showSpecHandlers] = useDisclosure()

  const renderSpecification = isShowSpec ? specification : specification.slice(0, 7)

  //? Render(s)
  return (
    <View className="px-4 pt-4">
      <View className="lg:max-w-3xl xl:max-w-5xl">
        <Text className="mb-3 h-fit w-fit">规格</Text>

        <View className="l">
          <View className="space-y-4">
            {renderSpecification.map((item, i) => {
              if (!item.value) return
              else
                return (
                  <View key={i} className="flex flex-row">
                    <Text className="py-2 ml-3 font-light leading-5 tracking-wide text-gray-500 w-36">
                      {item.title}
                      {width / 2}
                    </Text>
                    <View className="flex-auto block w-full py-2 font-normal leading-5 tracking-wide text-gray-600 break-all">
                      <RenderHtml contentWidth={width / 2} source={{ html: item.value }} />
                    </View>
                  </View>
                )
            })}
          </View>
          {specification.length > 7 && (
            <Pressable
              className="flex flex-row justify-end items-center py-2 text-sm text-sky-400"
              onPress={showSpecHandlers.toggle}
            >
              {isShowSpec ? (
                <Text className="text-sm text-sky-400">收起</Text>
              ) : (
                <Text className="text-sm text-sky-400">查看更多</Text>
              )}
              {!isShowSpec && (
                <Icons.MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  className="text-sky-400"
                />
              )}
            </Pressable>
          )}
        </View>
      </View>
    </View>
  )
}

export default Specification
