import { Router } from 'express';
import { authControllers } from 'controllers';

const authRouter = new Router();

authRouter.post('/local', authControllers.local);

export default authRouter;
