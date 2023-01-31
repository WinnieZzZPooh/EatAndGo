import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(getAuth(), email, password)
