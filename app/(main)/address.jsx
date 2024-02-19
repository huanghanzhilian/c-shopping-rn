import { Link } from 'expo-router'
import { View, Text } from 'react-native'

export default function AddressScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Address Screen</Text>
      <Text className="text-red-400">main sitemap</Text>
      <Link href="/about">go to About</Link>
      <Link href="/address">go to Address</Link>
      <Link href="/checkout">go to Checkout</Link>
      <Link href="/productList">go to ProductList</Link>
      <Link href="/productDetail">go to ProductDetail</Link>

      <Text className="text-red-400">auth sitemap</Text>
      <Link href="/login">go to Login</Link>
      <Link href="/register">go to Register</Link>
    </View>
  )
}
