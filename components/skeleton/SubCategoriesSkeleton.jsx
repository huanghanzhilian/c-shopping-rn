import { ScrollView, View } from 'react-native'

import Skeleton from '../common/Skeleton'

export default function SubCategoriesSkeleton() {
  return (
    <>
      <Skeleton.Item animated="background" height="h-5" width="w-24" className="mb-4" />
      <ScrollView horizontal className="flex pb-2">
        <Skeleton count={5}>
          <Skeleton.Items className="px-3 pt-4 pb-2 text-center border-2 border-gray-100 rounded-md mr-3">
            <Skeleton.Item
              animated="background"
              height="h-14"
              width="w-14"
              className="mb-2 rounded-2xl"
            />
            <Skeleton.Item
              animated="background"
              height="h-4"
              width="w-12"
              className="mx-auto rounded-md"
            />
          </Skeleton.Items>
        </Skeleton>
      </ScrollView>
    </>
  )
}
