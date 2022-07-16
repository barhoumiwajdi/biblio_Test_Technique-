import { Router } from 'express';
import { livreControllers } from 'controllers';


const livreRouter = new Router();

livreRouter.post('/livre/add', livreControllers.addLivre);
livreRouter.get('/livres', livreControllers.fetchLivre);

export default livreRouter;
