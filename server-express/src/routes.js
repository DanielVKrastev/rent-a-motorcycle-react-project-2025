import { Router } from "express";
import authController from "./controllers/auth-controller.js";
import userController from "./controllers/user-controller.js";
import motorcycleController from "./controllers/motorcycle-controller.js";
import reservationContoller from "./controllers/reservation-controller.js";

const routes = Router();

routes.use('/auth', authController);
routes.use('/users', userController);
routes.use('/motorcycle', motorcycleController);
routes.use('/reservations', reservationContoller);

routes.get('*', (req, res) => {
    res.send({});
});

export default routes;