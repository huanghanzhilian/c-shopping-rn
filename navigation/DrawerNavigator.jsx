import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from '../screens/CategoryScreen';
import AddressScreen from '../screens/AddressScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CategoryList" component={CategoryScreen} />
      <Drawer.Screen name="AddressManagement" component={AddressScreen} />
      <Drawer.Screen name="ProfileEditor" component={ProfileScreen} />
      <Drawer.Screen name="FavoriteList" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
