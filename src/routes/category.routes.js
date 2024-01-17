import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  res.send('a')
})

export default router
