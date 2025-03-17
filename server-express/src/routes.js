import { Router } from "express";
import authController from "./controllers/auth-controller.js";
import userController from "./controllers/user-controller.js";

const routes = Router();

routes.use('/auth', authController);
routes.use('/users', userController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;