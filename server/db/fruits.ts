import { Fruit } from '../../models/fruits'

import db from './connection'

export function getFruits(): Promise<Fruit[]> {
  return db('fruits')
    .select()
}

export function getFruitById(id: number): Promise<Fruit> {
  return db('fruits')
    .where('id', id)
    .first()
}

export function addFruit(fruit: Fruit): Promise<Fruit> {
  return db('fruits')
    .insert(fruit)
    .returning('*')
    .then(([fruit]) => fruit)
}

export function updateFruit(id: number, rating: number): Promise<Fruit> {
  return db('fruits')
    .where('id', id)
    .update({ rating })
    .returning('*')
    .then(([fruit]) => fruit)
}

export function deleteFruit(id: number): Promise<void> {
  return db('fruits')
    .where('id', id)
    .del()
}