import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Search from './Search'

export default function FeedHeader() {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ paddingTop: insets.top }} className="p-3 bg-white shadow-sm">
      <Search />
    </View>
  )
}
