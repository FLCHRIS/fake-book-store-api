import { Router } from 'express'
import { validateToken } from '../middlewares/validateToken'
import * as bookController from '../controllers/book.controller'

const router = Router()

router.post('/', validateToken, bookController.createBook)

router.get('/', bookController.getBooks)

router.get('/:id', bookController.getBook)

router.put('/:id', validateToken, bookController.updateBook)

router.delete('/:id', validateToken, bookController.deleteBook)

export default router
