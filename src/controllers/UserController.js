import pkg from '@prisma/client'
import UsuarioService from '../services/UsuarioService.js'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

const service = new UsuarioService(prisma)
class UsuarioController{

    

    static getAllUsuarios = async (req, res, next) => {
        try{
            const allUsuarios = await service.getAllUsuarios(req.nome)
            res.status(200).json(allUsuarios)
        }catch(erro){
            next(erro)
        }
    }

    static createUsuario = async (req, res, next) => {
        try{
            const usuario = await service.createUsuario(req.body)
            res.status(201).json(usuario)
        }catch(erro){
            next(erro)
        }
    }

    static getUsuarioById = async (req, res, next) => {
        try{
            const usuario = await service.getUsuarioById(req.params.id)
            res.status(200).json(usuario)
        }catch(erro){
            if(erro.message === "User Not Found") res.status(404).json({mensagem : erro.message})
            else throw erro
        }
    }

    static updateUsuario = async (req, res, next) => {
        try{
            const usuario = await service.updateUsuario(req.body)
            res.status(200).json(usuario)
        }catch(erro){
            next(erro)
        }
    }

    static deleteUsuario = async (req, res, next) => {
        try{
            await service.deleteUsuario(req.params.id)
            res.status(204).send()
        }catch(erro){
            next(erro)
        }
    }
}

export default UsuarioController