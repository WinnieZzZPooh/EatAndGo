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
  apiKey: 'AIzaSyAG_uN631rLMYwLf9K7pUq_URO3OWBGviU',
  authDomain: 'mealstogo-82f6a.firebaseapp.com',
  projectId: 'mealstogo-82f6a',
  storageBucket: 'mealstogo-82f6a.appspot.com',
  messagingSenderId: '444458840224',
  appId: '1:444458840224:web:59032ae629d2cc44c359c5',
  measurementId: 'G-L688LWDC6T'
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
