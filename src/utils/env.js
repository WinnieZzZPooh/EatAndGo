import { Platform } from 'react-native'

const liveHost = 'https://us-central1-scoutx-1523612790305.cloudfunctions.net'
const localHost = 'http://localhost:5001/mealstogo-b2612/us-central1'

export const isAndroid = Platform.OS === 'android'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const isMock = true
// export const host = !isDevelopment || isAndroid ? liveHost : localHost
export const host = liveHost
