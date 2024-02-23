import { Text, TextInput, View } from 'react-native'

export default function TextField(props) {
  return (
    <View className="w-full">
      {/* <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginBottom: 5 }}>
        {props.placeholder}
      </Text> */}
      <TextInput className="block w-full px-3 py-2.5 transition-colors border border-gray-200 rounded-md outline-none bg-zinc-50/30 focus:border-blue-600 leading-none" />
    </View>
  )
}
