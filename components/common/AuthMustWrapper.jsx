import { router } from 'expo-router'

import BigLoading from '../loading/BigLoading'

import { useUserInfo } from '@/hooks'

export default function AuthMustWrapper({ children }) {
  const { userInfo, isVerify, isLoading } = useUserInfo()

  //? Render(s)
  if (isLoading) return <BigLoading />
  if (!isVerify || !userInfo) {
    router.replace('/login')
    return null
  }
  if (isVerify && userInfo) return <>{children}</>
}
