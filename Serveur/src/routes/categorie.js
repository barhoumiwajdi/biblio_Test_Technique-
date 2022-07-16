import { Router } from 'express';
import { categorieControllers } from 'controllers';


const categorieRouter = new Router();

categorieRouter.post('/categorie/add', categorieControllers.addCategorie);
categorieRouter.get('/categories', categorieControllers.fetchCategorie);

export default categorieRouter;
