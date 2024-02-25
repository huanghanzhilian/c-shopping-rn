import { Text, View } from 'react-native'

export default function DisplayError(props) {
  //? Props
  const { errors } = props

  //? Render(s)
  return (
    <View className="min-h-[29px]">
      {!!errors && (
        <View>
          <View className="min-w-max mt-1.5 inline-flex gap-x-1 text-sm ">
            <Text className="text-red-600">{errors?.message}</Text>
          </View>
        </View>
      )}
    </View>
  )
}
