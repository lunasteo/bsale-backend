import express from "express";
import productsRouter from './productRouter.js';
import categoryRouter from './categoryRouter.js';

function routerApi(app) {
    const router = express.Router();
    app.use('/api', router);
    router.use('/products', productsRouter)
    router.use('/category', categoryRouter);
}

export default routerApi;