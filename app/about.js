import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-gray-500">
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
        }}>
        Update the title
      </Text>
    </View>
  );
}
