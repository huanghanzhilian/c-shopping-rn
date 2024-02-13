import { useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";
import { setTokenAsync } from '@/store'
import { useAppDispatch, useAppSelector } from '@/hooks';

export default function LoginScreen() {
  //? Assets
  const dispatch = useAppDispatch()
  const router = useRouter()

  //? Store
  const { token, status } = useAppSelector(state => state.user)
  

  //? Handlers
  const onLogIn = async () => {
    try {
      await dispatch(setTokenAsync('123456')).unwrap()
      router.back()
    } catch (e) {
      // TODO: deal with the error 
    }
    
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable onPress={onLogIn}>
        <Text>Login: {status}</Text>
      </Pressable>
    </View>
  );
}