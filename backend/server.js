import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()

const app = express()
import cookieParser from 'cookie-parser'

import productRouter from './routes/productRoutes.js'
import userRouter from './routes/userRoutes.js'
import cartRouter from './routes/cartRoutes.js'

const corsOptions = {
    origin: ['http://localhost:5173','http://localhost:5174'],
    credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())


app.use('/api/products' , productRouter)
app.use('/api/user' , userRouter)
app.use('/api/cart' , cartRouter)


mongoose.connect(process.env.DB_URI)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`DB connected and server running on port ${process.env.PORT}`)
            })
        })
        .catch((error) => {
            console.log(error)
        })
