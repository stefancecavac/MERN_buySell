import express from 'express'
import { getProducts , postProduct , deleteProduct } from '../controllers/productController.js'

const router = express.Router()


router.get('/' , getProducts)
router.post('/' , postProduct)
router.delete('/:id' , deleteProduct)


export default router