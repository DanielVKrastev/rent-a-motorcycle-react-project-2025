import { Router } from "express";
import authController from "./controllers/auth-controller.js";
import userController from "./controllers/user-controller.js";
import motorcycleController from "./controllers/motorcycle-controller.js";

const routes = Router();

routes.use('/auth', authController);
routes.use('/users', userController);
routes.use('/motorcycle', motorcycleController);

routes.get('*', (req, res) => {
    res.render('404');
});

export default routes;