import { prisma } from "../db";

//Búsqueda por email para validar usuario existente

export const findUserByEmail = async (email: string) => {
  return prisma.user.findFirst({ where: { email: { equals: email } } });
};

//Crear un nuevo usuario
export const createUser = async (
  name: string,
  lastName: string,
  email: string,
  password: string,
  mantener_sesion: boolean,
  terminos: boolean,
) => {
  return prisma.user.create({
    data: {
      name,
      lastName,
      email,
      password,
      mantener_sesion,
      terminos,
    },
  });
};
