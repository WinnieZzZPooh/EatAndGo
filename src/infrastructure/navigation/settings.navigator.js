import React from 'react'
import { SettingsScreen } from '@app/features/settings/screens/settings.screen'
import { FavouritesScreen } from '@app/features/settings/screens/favourites.screen'
import { CameraScreen } from '@app/features/settings/screens/camera.screen'

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

const SettingsStack = createStackNavigator()

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  )
}
