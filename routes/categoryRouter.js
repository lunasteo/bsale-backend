import app from 'express';

import CategoryController from '../controllers/categoryController.js';
import validateNum from '../validators/category.js';
const routes = app.Router();


/**
 * @swagger
 *  components:
 *     schemas:
 *      Category:
 *        type: object
 *        properties:
 *          id:
 *              type: integer
 *              description: Id de la categoria.
 *          name:
 *              type: string
 *              description: Nombre de la categoria.
 *        required:
 *          - Id
 *          - name
 *        example:
 *          id: 1
 *          name:  bebida energetica, 
 */
routes.get('/', new CategoryController().getAllCategories);
//Get Categories
/**
 * @swagger
 * /api/Category:
 *  get:
 *      summary: Devuelve todas las categorias.
 *      tags: [Category]
 *      responses:
 *          200:
 *              description: all Category
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          404:
 *              description: No se encontraron Categorias
 *      
 */
routes.get('/:id', validateNum, new CategoryController().getOneCategory);
/**
 * @swagger
 * /api/Category/{id}:
 *  get:
 *      summary: Devuelve un categoria segun su id con sus productos asociados.
 *      tags: [Category]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the Category id
 *      responses:
 *          200:
 *              description: Una categoria con todos los productos asociados.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Category'
 *          404:
 *              description: Category not found
 * 
 */
export default routes;