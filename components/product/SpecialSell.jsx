import { Text, View } from 'react-native'

const SpecialSell = props => {
  //? Props
  const { discount, inStock } = props

  //? Render(s)
  if (discount > 0 && inStock !== 0) {
    return (
      <View className="bg-red-500 absolute top-0 left-0 z-10 px-2 py-1 rounded-full overflow-hidden">
        <Text className="text-white">特价销售</Text>
      </View>
    )
  } else {
    return null
  }
}

export default SpecialSell
