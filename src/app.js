import express from 'express'
import userRouter from './routes/UserRoutes.js'

const app = express()
app.use(express.json(), userRouter)

export default app