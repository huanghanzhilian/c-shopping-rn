import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

import { Link } from 'expo-router';
import { useAuth } from "../../context/auth";

export default function Messages() {
  
  const { signOut, user } = useAuth();

  const onLogOut = async () => {
    signOut();
  };

  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true
        }}
      />
      <Text>Cart screen</Text>
      {user?.email
        ? (
          <>
            <Text>{user.email}</Text>
            <Pressable onPress={onLogOut} style={styles.button}>
              <Text style={{ color: "white" }}>Log Out</Text>
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
