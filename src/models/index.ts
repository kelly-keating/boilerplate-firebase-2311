import { User } from '@firebase/auth'

export type FirebaseUser = User

export interface OutletProps {
  user: FirebaseUser
  refreshUser: () => void
}

// ----- FRUITS -----

export interface Fruit {
  id: string
  name: string
  rating: number
}
