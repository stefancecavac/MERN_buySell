import { configDotenv } from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
configDotenv()

const app = express()

import productRouter from './routes/productRoutes.js'

app.use(express.json())
app.use('/api/products' , productRouter)


mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`database connected and server has started on port ${process.env.PORT}`)
        }) 
    })
    .catch((error) => {
        console.log(error)
    })

