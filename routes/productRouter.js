import app from 'express';

import ProductController from '../controllers/productController.js';
const routes = app.Router();

routes('/', new ProductController().getAllProducts);
routes('/:id', new ProductController().getOneProduct);
routes('/search/:search', new ProductController().searchProduct)

export default routes;