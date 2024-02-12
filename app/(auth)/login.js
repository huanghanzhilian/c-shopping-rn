import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/auth";

export default function Login() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [email, setEmail] = useState("user123");

  const { signIn } = useAuth();

  const onLogin = async () => {
    signIn({ email });
    router.back()
  };

  return (
    <View>
      <Pressable onPress={onLogin}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}