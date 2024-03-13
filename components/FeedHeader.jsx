import { router } from 'expo-router'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Search from './Search'
import Icons from './common/Icons'
import Logo from './svgs/logo.svg'

import { useAppSelector } from '@/hooks'
import { formatNumber } from '@/utils'

export default function FeedHeader() {
  //? Assets
  const insets = useSafeAreaInsets()

  //? Store
  const { totalItems } = useAppSelector(state => state.cart)

  //? Handlers
  const handleIconClick = path => {
    router.push(path)
  }

  //? Render(s)
  return (
    <View style={{ paddingTop: insets.top }} className="p-3 bg-white shadow-sm">
      <View className="flex flex-row items-center justify-between">
        <Logo width={120} height={40} />
        <View className="flex flex-row space-x-3 pr-1">
          <TouchableOpacity
            onPress={() => {
              handleIconClick('/notice')
            }}
          >
            <Icons.Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>

          <Pressable
            onPress={() => {
              handleIconClick('/cart')
            }}
            className="relative"
          >
            <Icons.AntDesign name="shoppingcart" size={24} color="#1F2937" />
            {formatNumber(totalItems) && (
              <View className="absolute outline outline-2 -top-3 -right-3 bg-red-500 rounded-md w-5 h-5 p-0.5">
                <Text className=" text-center text-xs text-white">{formatNumber(totalItems)}</Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
      <Search />
    </View>
  )
}
