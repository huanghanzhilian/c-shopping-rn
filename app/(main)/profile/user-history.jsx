import { Link, Stack } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { EmptyCart, ResponsiveImage } from '@/components'
import { useAppSelector } from '@/hooks'
import { truncate } from '@/utils'

const UserHistoryScreen = () => {
  //? Store
  const { lastSeen } = useAppSelector(state => state.user)

  //? selector
  return (
    <>
      <Stack.Screen
        options={{
          title: '最近访问',
          headerBackTitleVisible: false,
        }}
      />
      {lastSeen.length > 0 ? (
        <ScrollView className="px-3 space-y-4 bg-white">
          {lastSeen.map(item => (
            <View className="border-b border-gray-200 " key={item.productID}>
              <Link href={`/products/${item.productID}`} asChild>
                <Pressable className="flex flex-row items-center gap-4 py-4 ">
                  <ResponsiveImage
                    className="w-36 h-36 md:mx-auto"
                    imageStyles="w-36 h-36"
                    source={item.image.url}
                    alt={item.title}
                  />

                  <Text className="flex-1 px-3 text-left text-gray-800 leadiri-6 ">
                    {truncate(item.title, 80)}
                  </Text>
                </Pressable>
              </Link>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View className="py-20">
          <EmptyCart className="mx-auto h-52 w-52" />
          <Text className="text-center">您的最近访问列表为空</Text>
        </View>
      )}
    </>
  )
}

export default UserHistoryScreen
