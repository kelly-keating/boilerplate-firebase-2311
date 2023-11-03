import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { addFruit } from '../api/fruits'

function NewFruit() {
  const goTo = useNavigate()

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    const form = evt.target as HTMLFormElement
    const name = form.newname.value
    const rating = form.rating.value

    if (!name) return alert('Please enter a fruit name')
    if (isNaN(Number(rating)))
      return alert('Please enter a number for your rating')

    addFruit({ name, rating })
      .then((fruit) => goTo('/' + fruit.id))
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <h2>Add a new fruit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="newname" />
        </div>
        <div>
          <label htmlFor="color">Yum rating</label>
          <input type="text" id="rating" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewFruit
