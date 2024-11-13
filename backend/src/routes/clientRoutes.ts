import { Router } from 'express';
import { createClient } from '../controllers/clientController';

const router = Router();

// Defina a rota de criação de cliente
router.post('/clients', createClient);

export default router;

