import { Router } from 'express';
import { changeRole } from '../controllers/users.js';

const router = Router();

router.get('/premium/:uid', changeRole);

export default router;
