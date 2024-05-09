import express from 'express'
const router = express.Router()

import { getWhishList,addToWhishList } from '../controllers/whishListController.js'
import authenticate from '../middlewares/authentication.js'

router.use(authenticate)
router.get('/', getWhishList)
router.post('/',addToWhishList)

export default router