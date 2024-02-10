import React from 'react';
import { Button, View, Text } from 'react-native';

function CheckoutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>CheckoutScreen Screen</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default CheckoutScreen;
