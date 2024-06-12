// firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyBMfV4pBWm5YMnu2xOoDAjBLzzEIkB2wy8',
  authDomain: 'audascent.firebaseapp.com',
  projectId: 'audascent',
  storageBucket: 'audascent.appspot.com',
  messagingSenderId: '611747687741',
  appId: '1:611747687741:web:79fa8b3ca557a2e46b2954',
  measurementId: 'G-8MRVQ25EN9'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export { auth, googleProvider, facebookProvider }
