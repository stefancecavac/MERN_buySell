import express from 'express'
import { getProducts , postProduct , deleteProduct ,getSingleProduct } from '../controllers/productController.js'
import authenticate from '../middlewares/authentication.js'

const router = express.Router()

router.get('/' , getProducts)
router.get('/:id' , getSingleProduct)

router.use(authenticate)
router.post('/' , postProduct)
router.delete('/:id' , deleteProduct)


export default router