import { AntDesign } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

const FeedSectionContainer = props => {
  //? Props
  const { title, showMore = false, onJumptoMore, children, style = {} } = props

  //? Handlers
  const handleJumpMore = () => {
    onJumptoMore()
  }

  //? Render(s)
  return (
    <View style={style} className="mt-6">
      <View className="flex flex-row justify-between items-center mb-3">
        <Text className="mr-auto text-base font-bold">{title}</Text>
        {showMore && (
          <TouchableOpacity
            onPress={handleJumpMore}
            className="flex flex-row items-center space-x-1"
          >
            <Text className="text-neutral-400 text-base">更多</Text>
            <AntDesign name="arrowright" size={14} color="rgb(163 163 163)" />
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  )
}

export default FeedSectionContainer
