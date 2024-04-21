import express from 'express'
import { getProducts , postProduct , deleteProduct ,getSingleProduct } from '../controllers/productController.js'

const router = express.Router()


router.get('/' , getProducts)
router.get('/:id' , getSingleProduct)
router.post('/' , postProduct)
router.delete('/:id' , deleteProduct)


export default router