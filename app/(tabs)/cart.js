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
    <View>
      <Text>Cart screen</Text>
      {token
        ? (
          <>
            <Text>token: {token}</Text>
            <Pressable onPress={onLogOut} style={styles.button}>
              <Text style={{ color: "white" }}>Log Out {status}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "60%",
    backgroundColor: "#05BFDB",
    marginTop: 8,
    borderRadius: 32,
    alignItems: "center",
  },
});
