
class UsuarioService{
    constructor(repository){
        this.repository = repository
    }

    async getAllUsuarios(req){
            const {pagina = 1, limite = 20} = req.query
            const skip = (pagina - 1) * limite

            if (req.query.nome) {
                const usuariosQuery = await this.repository.usuario.findMany({
                  where: {
                    nome: {
                      startsWith: req.query.nome,
                      mode: 'insensitive'
                    }
                  },
                  skip : skip,
                  take : limite
                });

                return usuariosQuery
            }
    }

    async createUsuario(body){
            await this.repository.usuario.create({
                data:{
                    nome : body.nome,
                    email : body.email,
                    telefone : body.telefone
                }
            })

            return body
    }

    async getUsuarioById(id){
            const userFind = await this.repository.usuario.findFirst({
                where : {
                    id : parseInt(id)
                    }
                })

            if(userFind === null){
                throw new Error("User Not Found")
            }

            return userFind
        
    }

    async updateUsuario(body){
            const { id, nome, email, telefone } = body
            await this.repository.usuario.update({
                where : {
                id : parseInt(id)
            },
                data : {nome, email, telefone}
            })

            return body
    }

    async deleteUsuario(id){
        await this.repository.usuario.delete({
            where : {
                id : parseInt(id)
            }
        })
    }
}

export default UsuarioService