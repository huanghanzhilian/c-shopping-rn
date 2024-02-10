import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Drawer Content</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
        {/* Add more menu items as needed */}
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
