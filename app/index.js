import { View } from 'react-native';

import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link push href="/about">go to About</Link>
      {/* ...other links */}
    </View>
  );
}
