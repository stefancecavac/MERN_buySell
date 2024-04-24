import express from 'express'
const router = express.Router()

import { getCart , addToCart ,removeFromCart} from '../controllers/cartController.js'
import authenticate from '../middlewares/authentication.js'

router.use(authenticate)

router.get('/', getCart)
router.post('/',addToCart)
router.delete('/:id',removeFromCart)


export default router