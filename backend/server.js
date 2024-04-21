import { configDotenv } from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
configDotenv()

const app = express()

import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/products' , productRouter)
app.use('/api/user' , userRouter)



mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`database connected and server has started on port ${process.env.PORT}`)
        }) 
    })
    .catch((error) => {
        console.log(error)
    })

