import { View } from 'react-native'

import Skeleton from '../common/Skeleton'

export default function ProductSkeleton() {
  return (
    <View className="">
      <Skeleton count={10}>
        <Skeleton.Items className="flex flex-row items-center gap-3 space-x-3 mb-6">
          <Skeleton.Item
            height="h-[28vw]"
            width="w-[26vw]"
            animated="background"
            className="rounded-md"
          />
          <View className="flex-1 flex-col space-y-3 w-full">
            <Skeleton.Item height="h-5" width="w-[100%]" animated="background" />
            <Skeleton.Item height="h-5" width="w-[70%]" animated="background" />
            <Skeleton.Item height="h-5" width="w-28" animated="background" />
            <View className="flex flex-row justify-between">
              <Skeleton.Item height="h-5" width="w-20" animated="background" />
              <Skeleton.Item height="h-5" width="w-20" animated="background" />
            </View>
          </View>
        </Skeleton.Items>
      </Skeleton>
    </View>
  )
}
