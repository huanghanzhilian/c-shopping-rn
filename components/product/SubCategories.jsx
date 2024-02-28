import { Link } from 'expo-router'
import { Pressable, ScrollView, Text, View } from 'react-native'

import ResponsiveImage from '../common/ResponsiveImage'
import SubCategoriesSkeleton from '../skeleton/SubCategoriesSkeleton'

const SubCategories = props => {
  //? Props
  const { childCategories, name, isLoading } = props

  //? Render(s)
  return (
    <>
      {isLoading ? (
        <View className="px-4 mt-4 mb-2">
          <SubCategoriesSkeleton />
        </View>
      ) : childCategories && childCategories.length > 0 ? (
        <View className="px-4 mt-4 mb-2">
          <Text className="mb-4 text-base text-black">{name}</Text>
          <ScrollView horizontal className="flex gap-3 pb-2">
            {childCategories.map(item => (
              <Link
                key={item._id}
                className="px-3 pt-4 pb-2 text-center border-2 border-gray-100 rounded-md"
                href={{
                  pathname: '/products',
                  params: { category: item.slug },
                }}
                push
                asChild
              >
                <Pressable>
                  <ResponsiveImage
                    className="w-14 h-14"
                    imageStyles="w-full h-full"
                    source={item.image}
                    alt={item.name}
                  />
                  <Text className="inline-block text-xs text-neutral-600 mt-2 text-center">
                    {item.name}
                  </Text>
                </Pressable>
              </Link>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </>
  )
}

export default SubCategories
