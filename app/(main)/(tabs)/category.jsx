import { Link, Stack, router } from 'expo-router'
import { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native'

import { Icons, ShowWrapper } from '@/components'
import { useGetCategoriesQuery } from '@/services'

export default function CategoryScreen() {
  //? Get Categories Query
  const { categories, isSuccess, isFetching, error, isError, refetch } = useGetCategoriesQuery(
    undefined,
    {
      selectFromResult: ({ data, ...args }) => ({
        categories: data?.data?.categories || [],
        ...args,
      }),
    }
  )

  //? State
  const [activeMinCat, setActiveMinCat] = useState({})

  //? Handlers
  const handleActive = cat => {
    setActiveMinCat(cat)
  }

  const handleSearch = () => {
    router.push('/search')
  }

  //? Re-Renders
  useEffect(() => {
    if (categories.length) setActiveMinCat(categories?.filter(category => category.level === 1)[0])
  }, [categories])

  //? Render(s)
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <>
              <Icons.EvilIcons
                name="search"
                size={30}
                color="#1F2937"
                className="px-2 py-1"
                onPress={handleSearch}
              />
            </>
          ),
        }}
      />
      <ShowWrapper
        error={error}
        isError={isError}
        refetch={refetch}
        isFetching={isFetching}
        isSuccess={isSuccess}
        type="list"
        dataLength={categories?.length ?? 0}
      >
        <View className="flex h-full flex-row bg-white">
          <ScrollView className="bg-neutral-100 h-full w-3/12 shrink-0">
            {categories.length
              ? categories
                  .filter(category => category.level === 1)
                  .map(levelOneCategory => (
                    <TouchableOpacity
                      className={`flex flex-col items-center py-3 px-2 space-y-2 border-b border-r border-neutral-200 bg-neutral-100 ${activeMinCat._id === levelOneCategory._id ? 'bg-white border-r-0' : ''}`}
                      key={levelOneCategory._id}
                      onPress={() => handleActive(levelOneCategory)}
                    >
                      <View className="rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                        <Image
                          source={{
                            uri: levelOneCategory.image,
                          }}
                          className="w-7 h-7"
                        />
                      </View>
                      <Text className="text-gray-700">{levelOneCategory.name}</Text>
                    </TouchableOpacity>
                  ))
              : null}
          </ScrollView>
          <ScrollView className="bg-white w-9/12 ml-2">
            <View className="p-2">
              {activeMinCat
                ? categories?.map(levelTwoCategory => {
                    if (levelTwoCategory.parent === activeMinCat._id) {
                      return (
                        <View key={levelTwoCategory._id}>
                          <Link
                            href={{
                              pathname: '/products',
                              params: { category: levelTwoCategory.slug },
                            }}
                            asChild
                          >
                            <Pressable>
                              <Text className="break-words py-2 text-neutral-900">
                                {levelTwoCategory.name}
                              </Text>
                            </Pressable>
                          </Link>

                          <View className="flex flex-row flex-wrap">
                            {categories
                              .filter(category => category.parent === levelTwoCategory._id)
                              .map((levelThreeCategory, index) => (
                                <Link
                                  href={{
                                    pathname: '/products',
                                    params: { category: levelThreeCategory.slug },
                                  }}
                                  asChild
                                  key={levelThreeCategory._id}
                                >
                                  <TouchableOpacity
                                    className={`flex items-center w-[26%] mr-[11%] space-y-2 my-4 ${index % 3 === 2 ? 'mr-0' : ''}`}
                                  >
                                    <View className="flex items-center justify-center w-full aspect-square rounded-full border-solid border-2 border-slate-200 overflow-hidden">
                                      <Image
                                        key={index}
                                        source={{
                                          uri: levelThreeCategory.image,
                                        }}
                                        className="w-[70%] h-[70%]"
                                      />
                                    </View>
                                    <Text className="text-gray-700">{levelThreeCategory.name}</Text>
                                  </TouchableOpacity>
                                </Link>
                              ))}
                          </View>
                        </View>
                      )
                    }
                  })
                : null}
            </View>
          </ScrollView>
        </View>
      </ShowWrapper>
    </>
  )
}
