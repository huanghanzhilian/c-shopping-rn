import React from 'react'
import { Button, View } from 'react-native'

export default function Search(props) {
  return (
    <View className="flex flex-row flex-grow rounded-md bg-zinc-200/80 justify-between ">
      <Button
        className="flex-grow py-1 px-3 text-left bg-transparent outline-none cursor-pointer text-gray-400 focus:border-none"
        title="善假于物，用好搜索..."
      />
      <Button title="Press me" className="p-2" />
    </View>
  )
}
