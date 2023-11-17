import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarUsuario = async (nome: string, email: string) => {
  try {
    const usuario = await prisma.usuario.create({
      data: { nome, email },
    });
    return usuario;
  } catch (error: any) {
    throw new Error(`Erro ao criar usuário: ${error.message}`);
  }
};