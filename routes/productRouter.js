import app from 'express';

import ProductController from '../controllers/productController.js';
import validateSearch from '../validators/product.js';

const routes = app.Router();

routes.get('/', new ProductController().getAllProducts);
routes.get('/:id', new ProductController().getOneProduct);
routes.get('/search/:productSearch',validateSearch, new ProductController().searchProduct)

export default routes;