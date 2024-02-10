// 在 HomeScreen.js 中

import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGoToDetails = () => {
    // 导航到详情页
    navigation.navigate('Address');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go to Details 1111" onPress={handleGoToDetails} />
    </View>
  );
};

export default HomeScreen;
