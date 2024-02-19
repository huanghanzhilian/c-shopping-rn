import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

export default function Slider() {
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ]
  return (
    <View className="mt-3 rounded-lg overflow-hidden">
      <Swiper style={styles.wrapper} showsPagination activeDotColor="#1D4ED8" dotColor="#E5E7EB">
        {images.map((item, index) => (
          <Image
            key={index}
            source={{
              uri: item,
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
