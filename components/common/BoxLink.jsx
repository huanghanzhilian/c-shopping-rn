import { Link } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'

import Icons from './Icons'

// import Icons from './Icons'

export default function BoxLink(props) {
  //? Props
  const { children, path, name } = props

  //? Assets

  //? Render(s)
  return (
    <Link asChild href={path} className="transition-colors">
      <TouchableOpacity className="flex flex-row items-center py-4 text-xs text-gray-700 border-b border-gray-300">
        {children}
        <Text className="mr-auto ml-3 text-gray-700">{name}</Text>
        <Icons.MaterialIcons name="keyboard-arrow-right" size={24} className="text-gray-700" />
      </TouchableOpacity>
    </Link>
  )
}
