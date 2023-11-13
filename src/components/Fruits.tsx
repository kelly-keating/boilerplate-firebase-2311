import { Fruit, OutletProps } from '../models'
import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

import { watchFruits } from '../firebase/db'

function Fruits() {
  const [fruits, setFruits] = useState([] as Fruit[])
  const { user } = useOutletContext() as OutletProps

  if (!user) {
    return (
      <div>
        <h2>No one logged in!</h2>
        <p>
          You need to <Link to="/register">register</Link> or{' '}
          <Link to="log-in">log in</Link> to use this site
        </p>
      </div>
    )
  }

  watchFruits((data) => setFruits(data))

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Link to={'/' + fruit.id}>{fruit.name}</Link> ( rating:{' '}
            {'⭐️'.repeat(fruit.rating)} )
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Fruits
