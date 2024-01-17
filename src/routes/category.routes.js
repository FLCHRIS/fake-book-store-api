import { Router } from 'express'
import { validateToken } from '../middlewares/validateToken'
import * as categoryController from '../controllers/category.controller'

const router = Router()

router.post('/', validateToken, categoryController.createCategory)
router.get('/', categoryController.getCategories)
router.get('/:id/books', categoryController.getBooksCategories)

export default router
