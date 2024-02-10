import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator'

import AddressScreen from '../screens/AddressScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Main" component={TabNavigator} />
    <Stack.Screen name="Address" component={AddressScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

export default MainStackNavigator;
