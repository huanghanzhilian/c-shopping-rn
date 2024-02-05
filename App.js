import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import { Cat } from './components'

export default function App() {
  return (
    <View style={styles.container}>
      <Cat></Cat>
      <StatusBar style="auto" />
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
