import usuarioRoutes from "./UsuarioRoutes.js";

const routes = (app) => {
    app.use(usuarioRoutes)
}

export default routes