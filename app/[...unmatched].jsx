import { Stack } from 'expo-router'
import { Text, View, Image } from 'react-native'

export default function NotFoundPage() {
  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          title: '404 Not Found!',
          headerBackTitleVisible: false,
        }}
      />
      <View className="flex h-full flex-col items-center justify-center py-8 gap-y-6 bg-white">
        <Text className="text-base font-semibold text-black">404 Not Found!</Text>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
          }}
          source={require('@/assets/page-not-found.png')}
          alt="404"
        />
      </View>
    </>
  )
}
