import { View, Text, Pressable, StyleSheet } from 'react-native';

import { Link } from 'expo-router';

import { setTokenAsync } from '../../store'
import { useAppSelector, useAppDispatch } from '../../hooks';


export default function CartScreen() {
  
  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { token, status } = useAppSelector(state => state.user)

  //? Handlers
  const onLogOut = async () => {
    dispatch(setTokenAsync(''));
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-500">
      <Text>Cart screen</Text>
      {token
        ? (
          <>
            <Text>token: {token}</Text>
            <Pressable onPress={onLogOut}>
              <Text>Log Out {status}</Text>
            </Pressable>
          </>
        )
        : (
          <>
            <Text>用户未登录</Text>
            <Link href="/login">去登录</Link>
          </>
        )
      }
    </View>
  );
}

