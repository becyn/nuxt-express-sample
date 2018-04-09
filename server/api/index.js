import { Router } from 'express'

import users from './users'
import drinks from './drinks'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(drinks)

export default router
