
import express, { Request, Response } from 'express';
import * as usuarioService from '../services/usuarioService';

const router = express.Router();

router.post('/usuarios', async (req: Request, res: Response) => {
  const { nome, email } = req.body;

  try {
    const novoUsuario = await usuarioService.criarNovoUsuario(nome, email);
    res.status(201).json(novoUsuario);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;