import { useLocalSearchParams, useRouter } from 'expo-router'

export default function useChangeRoute() {
  const router = useRouter()
  const params = useLocalSearchParams()

  const changeRoute = newQueries => {
    router.setParams({ ...params, ...newQueries })
  }

  return changeRoute
}
