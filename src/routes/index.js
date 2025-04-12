import userRouter from "./UserRoutes.js";

const routes = (app) => {
    app.use(userRouter)
}

export default routes