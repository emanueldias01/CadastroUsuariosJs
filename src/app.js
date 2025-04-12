import express from 'express'
import routes from './routes/index.js'
import trataErros from './middlewares/middlewares.js'

const app = express()
app.use(express.json())
routes(app)
app.use(trataErros)

export default app