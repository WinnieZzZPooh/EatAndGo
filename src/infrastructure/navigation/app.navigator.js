import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'

import { SafeArea } from '@app/components/utility/safe-area.component'

import { RestaurantsNavigator } from './restaurants.navigator'

const Tab = createBottomTabNavigator()

const TabIcons = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
)
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
)

const createScreenOptions = ({ route }) => {
  const iconName = TabIcons[route.name]
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false
  }
}

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
)
