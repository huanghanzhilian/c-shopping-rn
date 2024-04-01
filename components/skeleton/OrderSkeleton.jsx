import { View } from 'react-native'

import Skeleton from '../common/Skeleton'

export default function OrderSkeleton() {
  return (
    <View className="bg-white">
      <Skeleton count={5}>
        <Skeleton.Items className="mb-8 space-y-2">
          <Skeleton.Item animated="background" height="h-5" width="w-64" className="rounded-full" />
          <Skeleton.Item animated="background" height="h-5" width="w-20" className="rounded-md" />
          <View className="flex flex-row gap-x-3">
            <Skeleton.Item
              animated="background"
              height="h-20"
              width="w-20"
              className="rounded-md"
            />
            <Skeleton.Item
              animated="background"
              height="h-20"
              width="w-20"
              className="rounded-md"
            />
            <Skeleton.Item
              animated="background"
              height="h-20"
              width="w-20"
              className="rounded-md"
            />
            <Skeleton.Item
              animated="background"
              height="h-20"
              width="w-20"
              className="rounded-md"
            />
          </View>
        </Skeleton.Items>
      </Skeleton>
    </View>
  )
}
