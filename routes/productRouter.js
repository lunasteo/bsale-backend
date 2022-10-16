import app from 'express';

import ProductController from '../controllers/productController.js';

const routes = app.Router();
const productController = new ProductController();

routes('/', productController.getAllProducts);

export default routes;