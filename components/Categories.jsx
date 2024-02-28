import { FlashList } from '@shopify/flash-list'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import FeedSectionContainer from './common/FeedSectionContainer'

export default function Categories(props) {
  //? Props
  const { childCategories, color, name } = props

  //? Re-Renders
  if (childCategories.categories.length > 0 && color && name) {
    return (
      <FeedSectionContainer title="分类">
        <FlashList
          data={childCategories.categories}
          horizontal
          renderItem={({ item, index }) => (
            <Link
              key={item._id}
              href={{
                pathname: '/products',
                params: { category: item.slug },
              }}
              asChild
            >
              <Pressable className="flex items-center mr-3 space-y-2">
                <View className="w-14 h-14 rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                  <Image
                    key={index}
                    source={{
                      uri: item.image,
                    }}
                    className="w-full h-full"
                  />
                </View>
                <Text className="text-gray-700">{item.name}</Text>
              </Pressable>
            </Link>
          )}
          estimatedItemSize={400}
        />
      </FeedSectionContainer>
    )
  }
  return null
}
