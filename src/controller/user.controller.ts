import type { Response, Request } from "express";
import * as userService from "../services/user.services";
import { AppError } from "../errors/app.error";

//Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, lastName, email, password, mantener_sesion, terminos } =
      req.body;

    const user = await userService.createUser(
      name,
      lastName,
      email,
      password,
      mantener_sesion,
      terminos,
    );

    res.status(201).json(user);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
};
