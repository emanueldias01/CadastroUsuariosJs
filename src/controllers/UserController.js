import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

class UsuarioController{
    static getAllUsuarios = async (req, res) => {
        const allUsers = await prisma.usuario.findMany()
        res.status(200).json(allUsers)
    }

    static createUsuario = async (req, res) => {
        await prisma.usuario.create({
            data:{
                nome : req.body.nome,
                email : req.body.email,
                telefone : req.body.telefone
            }
        })

        res.status(201).json(req.body)
    }

    static getUsuarioById = async (req, res) => {
        const id = req.params.id
        const userFind = await prisma.usuario.findFirst({
            where : {
                id : parseInt(id)
            }
        })

        res.status(200).json(userFind)
    }

    static updateUsuario = async (req, res) => {
        const { id, nome, email, telefone } = req.body

        await prisma.usuario.update({
            where : {
                id : parseInt(id)
            },
            data : {nome, email, telefone}
        })

        res.status(200).json(req.body)
    }

    static deleteUsuario = async (req, res) => {
        const id = req.params.id
        await prisma.usuario.delete({
            where : {
                id : parseInt(id)
            }
        })

        res.status(204).json()
    }
}

export default UsuarioController