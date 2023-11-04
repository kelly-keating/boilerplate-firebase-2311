import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { getDatabase } from '@firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyA2J5SSgyiENlk6d8g5co3ra6s7JR9VsxI",
  authDomain: "fruits-app.firebaseapp.com",
  projectId: "fruits-app",
  storageBucket: "fruits-app.appspot.com",
  messagingSenderId: "919903841959",
  appId: "1:919903841959:web:73f534d62dec9089b6b582",
  databaseURL: "https://fruits-app-default-rtdb.asia-southeast1.firebasedatabase.app",
}
const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const db = getDatabase(firebaseApp)
