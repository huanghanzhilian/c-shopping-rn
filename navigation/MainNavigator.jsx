// MainNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 导入页面组件
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import DrawerContent from '../components/DrawerContent';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const CartStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const CategoryStackNavigator = () => (
  <CategoryStack.Navigator>
    <CategoryStack.Screen name="Category" component={CategoryScreen} />
  </CategoryStack.Navigator>
);

const CartStackNavigator = () => (
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={CartScreen} />
  </CartStack.Navigator>
);

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackNavigator} />
    <Tab.Screen name="Category" component={CategoryStackNavigator} />
    <Tab.Screen name="Cart" component={CartStackNavigator} />
    <Tab.Screen name="Profile" component={ProfileStackNavigator} />
  </Tab.Navigator>
);

// const MainNavigator = () => {
//   return (
//     <Drawer.Navigator drawerContent={() => <DrawerContent />}>
//       <Drawer.Screen name="Main" component={TabNavigator} />
//     </Drawer.Navigator>
//   );
// };

export default TabNavigator;
