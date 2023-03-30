import React from 'react' 
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { getApps, initializeApp } from 'firebase/app'
import 'react-native-gesture-handler'

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { theme } from './src/infrastructure/theme'
import { Navigation } from './src/infrastructure/navigation'

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'

const firebaseConfig = {
  apiKey: 'AIzaSyA0594HwEhXIp2M7nsKYDfS1VjvTRocJeE',
  authDomain: 'scoutx-1523612790305.firebaseapp.com',
  databaseURL: 'https://scoutx-1523612790305.firebaseio.com',
  projectId: 'scoutx-1523612790305',
  storageBucket: 'scoutx-1523612790305.appspot.com',
  messagingSenderId: '387871909001',
  appId: '1:387871909001:web:75e44f946acf41f8d31258'
}

if (!getApps().length) {
  initializeApp(firebaseConfig)
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
