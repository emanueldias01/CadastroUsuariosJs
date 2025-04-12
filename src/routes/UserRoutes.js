import express from 'express'

const userRouter = express.Router()

userRouter.get('/ping', (req, res) => {
    res.status(200).json({mensagem : "pong"})
})

export default userRouter