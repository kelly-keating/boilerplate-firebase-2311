import { Response, Router } from 'express'
import * as db from '../db/fruits'

const router = Router()

// Helper function to send errors
function sendError(res: Response, err: Error) {
  console.log(err)
  res.status(500).json({ message: 'Something went wrong' })
}

// GET /fruits
router.get('/', (req, res) => {
  db.getFruits()
    .then((fruits) => res.json(fruits))
    .catch((err) => sendError(res, err))
})

// GET /fruits/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getFruitById(id)
    .then((fruit) => res.json(fruit))
    .catch((err) => sendError(res, err))
})

// POST /fruits
router.post('/', (req, res) => {
  const fruit = req.body
  db.addFruit(fruit)
    .then((fruit) => res.json(fruit))
    .catch((err) => sendError(res, err))
})

// PUT /fruits/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const rating = Number(req.body.rating)
  db.updateFruit(id, rating)
    .then((fruit) => res.json(fruit))
    .catch((err) => sendError(res, err))
})

// DELETE /fruits/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteFruit(id)
    .then(() => res.json({ message: 'Fruit deleted' }))
    .catch((err) => sendError(res, err))
})

export default router
