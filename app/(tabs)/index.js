import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function FeedScreen() {
  return (
    <View>
      <Text>Feed screen</Text>
      <Link href="/about">go to About</Link>
    </View>
  );
}
