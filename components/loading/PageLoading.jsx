import { View } from 'react-native'

import BigLoading from './BigLoading'

export default function PageLoading() {
  //? Render(s)
  return (
    <View className="fixed h-full inset-0 z-40 items-center justify-center bg-blue-50/30">
      <BigLoading />
    </View>
  )
}
