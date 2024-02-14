import React from 'react'
import { Text, View, TextInput } from 'react-native'

export default function Cat(props) {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  )
}
