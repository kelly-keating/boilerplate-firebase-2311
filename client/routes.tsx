import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Dash from './components/Dash'
import Fruits from './components/Fruits'
import NewFruit from './components/NewFruit'
import OneFruit from './components/OneFruit'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dash />}>
      <Route index element={<Fruits />} />
      <Route path="add" element={<NewFruit />} />
      <Route path=":id" element={<OneFruit />} />
    </Route>,
  ),
)

export default routes
