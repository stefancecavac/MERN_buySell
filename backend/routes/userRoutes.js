import express from 'express'
const router = express.Router()

import { registerUser, loginUser ,logoutUser} from '../controllers/userController.js'

router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/logout', logoutUser)


export default router
