import { Router } from 'express';
import { accountControllers } from 'controllers';


const accountRouter = new Router();

accountRouter.post('/account/register', accountControllers.register);

export default accountRouter;
