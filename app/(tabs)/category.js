import { View, Text, Pressable } from 'react-native';

import { userLogout, userLogin } from '../../store'
import { useAppSelector, useAppDispatch } from '../../hooks';


export default function Messages() {

  //? Assets
  const dispatch = useAppDispatch()

  //? Store
  const { token } = useAppSelector(state => state.user)

  //? Handlers
  const onLogIn = async () => {
    dispatch(userLogin('123456'));
  };

  const onLogOut = async () => {
    dispatch(userLogout());
  };

  return (
    <View>
      <Text>Category screen</Text>
      <Text>token: {token}</Text>
      <Pressable onPress={onLogIn}>
        <Text>登录</Text>
      </Pressable>
      <Pressable onPress={onLogOut}>
        <Text>退出</Text>
      </Pressable>
    </View>
  );
}
