import { useAppDispatch } from './useRedux'
import useVerify from './useVerify'

import { useGetUserInfoQuery } from '@/services'
import { setTokenAsync } from '@/store'

export default function useUserInfo() {
  const dispatch = useAppDispatch()
  const isVerify = useVerify()

  const { data, isLoading, error, isError } = useGetUserInfoQuery(undefined, {
    skip: !isVerify,
  })

  if (isError) dispatch(setTokenAsync(''))

  return { userInfo: data?.data, isVerify, isLoading, error, isError }
}
