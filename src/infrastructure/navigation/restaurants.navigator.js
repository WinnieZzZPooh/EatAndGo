import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import { RestaurantsScreen } from '@app/features/restaurants/screens/restaurants.screen'
import { RestaurantDetailScreen } from '@app/features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: 200,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      <RestaurantStack.Screen name="RestaurantList" component={RestaurantsScreen} />
      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
    </RestaurantStack.Navigator>
  )
}
