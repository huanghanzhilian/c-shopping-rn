import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function FeedScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Feed screen</Text>
      <Link href="/about">go to About</Link>
    </View>
  );
}
