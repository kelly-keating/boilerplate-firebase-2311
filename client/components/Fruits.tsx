import { Fruit } from '../../models/fruits'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getFruits } from '../api/fruits'

function Fruits() {
  const [fruits, setFruits] = useState([] as Fruit[])

  useEffect(() => {
    getFruits()
      .then((data) => setFruits(data))
      .catch((err) => console.error(err))
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
