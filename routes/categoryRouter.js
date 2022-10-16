import app from 'express';

import CategoryController from '../controllers/categoryController.js';
const routes = app.Router();

routes.get('/', new CategoryController().getAllCategories);
routes.get('/:id', new CategoryController().getOneCategory);

export default routes;