import { useSelector } from 'react-redux'

export default function useVerify() {
  const { token } = useSelector(state => state.user)
  if (!token) return false
  return true
}
