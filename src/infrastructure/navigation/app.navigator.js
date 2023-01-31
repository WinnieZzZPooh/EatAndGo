import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Text, Button } from 'react-native'

import { SafeArea } from '@app/components/utility/safe-area.component'

import { RestaurantsNavigator } from './restaurants.navigator'
import { MapScreen } from '@app/features/map/screens/map.screen'

import { AuthenticationContext } from '@app/services/authentication/authentication.context'
import { RestaurantsContextProvider } from '@app/services/restaurants/restaurants.context'
import { LocationContextProvider } from '@app/services/location/location.context'
import { FavouritesContextProvider } from '@app/services/favourites/favourites.context'

const Tab = createBottomTabNavigator()

const TabIcons = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  )
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
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
)
