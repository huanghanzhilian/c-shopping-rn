import { Text, TouchableOpacity, View } from 'react-native'

import EmptyCustomList from '../emptyList/EmptyCustomList'
import PageLoading from '../loading/PageLoading'

export default function ShowWrapper(props) {
  //? Porps
  const {
    isError,
    error,
    refetch,
    isFetching,
    dataLength,
    type = 'list',
    isSuccess,
    emptyComponent,
    loadingComponent,
    children,
  } = props

  //? Render(s)
  return (
    <View className="h-full bg-white">
      {isError ? (
        <View className="py-20 mx-auto space-y-3 text-center w-fit">
          <Text className="text-sm">出现异常</Text>
          <Text className="text-sm text-red-500">{error?.error}</Text>
          <TouchableOpacity
            className="mx-auto py-2 px-8 flex-center bg-red-500 rounded-full"
            onPress={refetch}
          >
            <Text className="text-sm text-white">重试</Text>
          </TouchableOpacity>
        </View>
      ) : isFetching ? (
        <>{loadingComponent || <PageLoading />}</>
      ) : isSuccess && type === 'list' && dataLength > 0 ? (
        <>{children}</>
      ) : isSuccess && type === 'list' && dataLength === 0 ? (
        <>{emptyComponent || <EmptyCustomList />}</>
      ) : isSuccess && type === 'detail' ? (
        <>{children}</>
      ) : null}
    </View>
  )
}
