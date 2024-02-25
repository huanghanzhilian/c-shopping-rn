import { useEffect } from 'react'
import Toast from 'react-native-toast-message'

export default function HandleResponse(props) {
  //? Porps
  const { isSuccess, isError, error, message, onSuccess, onError } = props

  //? Re-Renders
  useEffect(() => {
    if (isSuccess) {
      if (onSuccess) onSuccess()
      Toast.show({
        type: 'success',
        text2: message,
      })
    }

    if (isError) {
      if (onError) onError()
      Toast.show({
        type: 'error',
        text2: error,
      })
    }
  }, [])

  return null
}
