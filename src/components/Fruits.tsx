import { Fruit } from '../models'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { watchFruits } from '../firebase/db'

function Fruits() {
  const [fruits, setFruits] = useState([] as Fruit[])

  useEffect(() => {
    watchFruits((data) => setFruits(data))
  }, [])

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Link to={'/' + fruit.id}>{fruit.name}</Link>{' '}
            ( rating: {'⭐️'.repeat(fruit.rating)} )
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Fruits
