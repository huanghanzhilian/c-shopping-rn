import { FontAwesome, Entypo, MaterialIcons, Feather } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'cart',
}
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000000',
      }}
      initialRouteName="cart"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'feed',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="category" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
