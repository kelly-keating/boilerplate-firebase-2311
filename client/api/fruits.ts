import request from 'superagent'
import { Fruit } from '../../models/fruits'

export function getFruits(): Promise<Fruit[]> {
  return request.get('/api/v1/fruits')
    .then(res => res.body)
}

export function getOneFruit(id: string): Promise<Fruit> {
  return request.get(`/api/v1/fruits/${id}`)
    .then(res => res.body)
}

export function addFruit(fruit: Omit<Fruit, 'id'>): Promise<Fruit> {
  return request.post('/api/v1/fruits')
    .send(fruit)
    .then(res => res.body)
}

export function updateFruit(id: string, rating: number): Promise<Fruit> {
  return request.put(`/api/v1/fruits/${id}`)
    .send({ rating })
    .then(res => res.body)
}

export function deleteFruit(id: string): Promise<void> {
  return request.delete(`/api/v1/fruits/${id}`)
    .then(res => res.body)
}
