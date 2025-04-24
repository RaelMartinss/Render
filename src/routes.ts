import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const router = Router();

router.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

export { router };
