import { FirebaseUser } from '../models'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { getUser, signOut } from '../firebase/auth'

function Dash() {
  const [user, setUser] = useState(null as FirebaseUser | null)

  useEffect(() => {
    refreshUser()
  }, [])

  const refreshUser = () => {
    try {
      const u = getUser()
      setUser(u)
    } catch (err) {
      const { message } = err as Error
      console.log(message)
    }
  }

  const removeUser = () => {
    signOut()
    refreshUser()
  }

  return (
    <>
      <header>
        <h1>Fruits!</h1>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/add">Add a fruit</Link>
          {!user && (
            <>
              {' | '}
              <Link to="/log-in">Log in</Link>
            </>
          )}
        </nav>
        {user && <button onClick={removeUser}>Log out</button>}
      </header>

      <Outlet context={{ user, refreshUser }} />
    </>
  )
}

export default Dash
