import * as userRespository from "../repository/user.repository";
import { AppError } from "../errors/app.error";

export const createUser = async (
  name: string,
  lastName: string,
  email: string,
  password: string,
  mantener_sesion: boolean,
  terminos: boolean,
) => {
  //Validamos si ya existe un usuario con le mismo correo
  const existsUser = await userRespository.findUserByEmail(email);

  if (existsUser) throw new AppError("El email ya está registrado", 409);

  return userRespository.createUser(
    name,
    lastName,
    email,
    password,
    mantener_sesion,
    terminos,
  );
};
