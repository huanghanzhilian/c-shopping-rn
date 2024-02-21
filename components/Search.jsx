import { EvilIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function Search(props) {
  //? Handers
  const handleCartClick = () => {
    router.push('/search')
  }

  //? Render(s)
  return (
    <TouchableOpacity
      onPress={handleCartClick}
      className="flex flex-row rounded-md bg-zinc-200/80 justify-between items-center p-1"
    >
      <Text className="flex-grow py-1 px-3 text-left bg-transparent outline-none cursor-pointer text-gray-400 focus:border-none">
        善假于物，用好搜索...
      </Text>
      <EvilIcons className="p-2" name="search" size={24} color="#1F2937" />
    </TouchableOpacity>
  )
}
