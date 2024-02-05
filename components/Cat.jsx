import React from "react";
import { Text, View, TextInput } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

export default function Cat () {
  return (
    <View>
      <Text>Hello, , I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
      <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="Name me!"
        />
    </View>
  )
}