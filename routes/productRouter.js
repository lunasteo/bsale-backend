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
/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Devuelve un producto segun su id
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the product id
 *      responses:
 *          200:
 *              description: one category
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: Product not found
 * 
 */
routes.get('/search/:productSearch', new ProductController().searchProduct);
/**
 * @swagger
 * /api/products/search/{productSearch}:
 *  get:
 *      summary: Devuelve una lista de producto segun caracteres
 *      tags: [Product]
 *      parameters:
 *          - in: path
 *            name: productSearch
 *            schema:
 *              type: string
 *            required: true
 *            description: the product name
 *      responses:
 *          200:
 *              description: Productos que coinciden con el criterio de busqueda
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          404:
 *              description: Producto no encontrado
 * 
 */

export default routes;