import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

export default function Slider(props) {
  //? Props
  const { data } = props

  //? Render(s)
  if (data?.length === 0) return null

  return (
    <View className="mt-3 rounded-lg overflow-hidden">
      <Swiper style={styles.wrapper} showsPagination activeDotColor="#1D4ED8" dotColor="#E5E7EB">
        {data
          .filter(item => item.isPublic)
          .map((item, index) => (
            <Image
              key={index}
              source={{
                uri: item.image.url,
              }}
              className="w-full h-full"
            />
          ))}
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
})
