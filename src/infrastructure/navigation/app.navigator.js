import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { RestaurantsNavigator } from './restaurants.navigator'
import { SettingsNavigator } from './settings.navigator'
import { MapScreen } from '@app/features/map/screens/map.screen'

import { RestaurantsContextProvider } from '@app/services/restaurants/restaurants.context'
import { LocationContextProvider } from '@app/services/location/location.context'
import { FavouritesContextProvider } from '@app/services/favourites/favourites.context'

const Tab = createBottomTabNavigator()

const TabIcons = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

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
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
)
