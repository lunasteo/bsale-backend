import app from 'express';

import CategoryController from '../controllers/categoryController.js';
import validateNum from '../validators/category.js';
const routes = app.Router();

routes.get('/', new CategoryController().getAllCategories);
routes.get('/:id', validateNum, new CategoryController().getOneCategory);

export default routes;