import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import { getUser } from './firebase/auth'

import Dash from './components/Dash'
import Fruits from './components/Fruits'
import NewFruit from './components/NewFruit'
import OneFruit from './components/OneFruit'
import Register from './components/Register'
import LogIn from './components/LogIn'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dash />}>
      <Route index element={<Fruits />} />
      <Route path="add" element={<AuthRoute element={<NewFruit />} />} />
      <Route path=":id" element={<AuthRoute element={<OneFruit />} />} />
      <Route
        path="register"
        element={<AuthRoute element={<Register />} noUser />}
      />
      <Route path="log-in" element={<AuthRoute element={<LogIn />} noUser />} />
    </Route>,
  ),
)

export default routes

// ----- ROUTE UTILS -----

interface AuthRouteProps {
  element: React.ReactNode
  altElement?: React.ReactNode
  noUser?: boolean
}

function AuthRoute({
  element,
  altElement = <Navigate to="/" replace />,
  noUser = false,
}: AuthRouteProps) {
  let loggedIn = false
  try {
    getUser()
    loggedIn = true
  } catch (err) {
    console.log('no user')
  }

  const showElem = noUser ? !loggedIn : loggedIn
  return showElem ? element : altElement
}
