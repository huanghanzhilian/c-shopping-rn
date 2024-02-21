import { FlashList } from '@shopify/flash-list'
import React from 'react'
import { Image, Text, View } from 'react-native'

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
            <View className="flex items-center mr-3 space-y-2" key={index}>
              <View className="w-14 h-14 rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                <Image
                  key={index}
                  source={{
                    uri: item.image,
                  }}
                  className="w-full h-full"
                />
              </View>
              <Text>{item.title}</Text>
            </View>
          )}
          estimatedItemSize={400}
        />
      </FeedSectionContainer>
    )
  }
  return null
}
