import { Router } from 'express'
import { validateToken } from '../middlewares/validateToken'
import * as userController from '../controllers/user.controller'

const router = Router()

router.post('/', validateToken, userController.createUser)

router.get('/', userController.getUsers)

router.get('/:id', userController.getUser)

router.put('/:id', validateToken, userController.updateUser)

router.delete('/:id', validateToken, userController.deleteUser)

export default router
