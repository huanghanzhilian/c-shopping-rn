import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

export default function Slider() {
  const images = [
    'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image/sliders/hUX6oL-lCKOKPYbZ5j4rx.webp',
    'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image/sliders/g8FHsxbCGw82WzjmamElL.webp',
    'http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image/sliders/hWQ4-Mx69MyLJbZAThWEt.webp',
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
