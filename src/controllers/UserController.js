import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

class UsuarioController{
    static getAllUsuarios = async (req, res, next) => {
        try{
            const allUsers = await prisma.usuario.findMany()
            res.status(200).json(allUsers)
        }catch(erro){
            next(erro)
        }
    }

    static createUsuario = async (req, res, next) => {
        try{
            await prisma.usuario.create({
                data:{
                    nome : req.body.nome,
                    email : req.body.email,
                    telefone : req.body.telefone
                }
            })
    
            res.status(201).json(req.body)
        }catch(erro){
            next(erro)
        }
    }

    static getUsuarioById = async (req, res, next) => {
        try{
            const id = req.params.id
            const userFind = await prisma.usuario.findFirst({
                where : {
                    id : parseInt(id)
                    }
                })

            if(userFind === null){
                res.status(404).json({mensagem : "Usuario não encontrado"})
            }
            
            res.status(200).json(userFind)
        }catch(erro){
            next(erro)
        }
    }

    static updateUsuario = async (req, res, next) => {
        try{
            const { id, nome, email, telefone } = req.body

            await prisma.usuario.update({
                where : {
                id : parseInt(id)
            },
                data : {nome, email, telefone}
            })

            res.status(200).json(req.body)
        }catch(erro){
            next(erro)
        }
    }

    static deleteUsuario = async (req, res, next) => {
        try{
            const id = req.params.id
            await prisma.usuario.delete({
                where : {
                    id : parseInt(id)
                }
            })

            res.status(204).json()
        }catch(erro){
            next(erro)
        }
    }
}

export default UsuarioController