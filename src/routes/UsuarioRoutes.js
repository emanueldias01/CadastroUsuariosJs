import express from 'express'
import UsuarioController from '../controllers/UserController.js'

const usuariosRoutes = express.Router()

usuariosRoutes.get('/ping', (req, res) => {
    res.status(200).json({mensagem : "pong"})
})
usuariosRoutes.get('/users', UsuarioController.getAllUsuarios)
usuariosRoutes.get('/user/:id', UsuarioController.getUsuarioById)
usuariosRoutes.post('/user', UsuarioController.createUsuario)
usuariosRoutes.put('/user', UsuarioController.updateUsuario)
usuariosRoutes.delete('/user/:id', UsuarioController.deleteUsuario)


export default usuariosRoutes