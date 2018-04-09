import { Router } from 'express'

const router = Router()

// Mock Drinks
const drinks = [
  { name: 'coke', price: 300, description: 'The best of coke!' },
  { name: 'beer', price: 600, description: 'The most popular!'},
  { name: 'wisky', price: 1000, description: 'Tastes terrific!' },
]

/* GET drinks listing. */
router.get('/drinks', function (req, res, next) {
  res.json(drinks)
})

/* GET drink by ID. */
router.get('/drinks/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < drinks.length) {
    res.json(drinks[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
