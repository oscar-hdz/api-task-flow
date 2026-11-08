import { Router } from "express";
import * as userController from "../controller/user.controller";

const router = Router();

//Crear un nuevo usuario
router.post("/user/new-user", userController.createUser);

export default router;
