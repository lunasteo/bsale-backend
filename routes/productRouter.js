import app from 'express';

import ProductController from '../controllers/productController.js';
const routes = app.Router();

/**
 * @swagger
 *  components:
 *     schemas:
 *      Product:
 *        type: object
 *        properties:
 *          name:
 *              type: string
 *              description: Nombre del producto
 *          ulrImage:
 *              type: string
 *              description: URL de la imagen
 *          price:
 *              type: integer
 *              description: Precio del producto.
 *          discount:
 *              type: integer
 *              description: Descuento aplicable al producto.
 *          category:
 *              type: integer
 *              description: Id de la categoria a la que pertenece el producto.
 *        required:
 *          - name
 *          - ulrImage
 *          - price
 *          - discount
 *          - category
 *        example:
 *          name: ISCO HORCON QUEMADO 40º
 *          ulrImage:  https://dojiw2m9tvv09.cloudfront.net/11132/product/horcon409062.jpg", 
 *          price: 7990
 *          discount: 20
 *          category: 2
 */

routes.get('/', new ProductController().getAllProducts);
//Get Products
/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: Devuelve todos los productos paginados en 10.
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: all Products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: No se encontraron productos
 *      
 */

routes.get('/:id', new ProductController().getOneProduct);
routes.get('/search/:productSearch', new ProductController().searchProduct)

export default routes;