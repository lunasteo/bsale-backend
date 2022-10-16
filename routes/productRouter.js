import app from 'express';

import ProductController from '../controllers/productController.js';
const routes = app.Router();

routes.get('/', new ProductController().getAllProducts);
routes.get('/:id', new ProductController().getOneProduct);
routes.get('/search/:productSearch', new ProductController().searchProduct)

export default routes;