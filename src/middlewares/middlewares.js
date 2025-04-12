const trataErros = (erro, req, res, next) => {
    res.status(500).json({mensagem : `Erro interno do Servidor: ${erro}`})
}

export default trataErros