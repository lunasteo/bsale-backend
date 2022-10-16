import boom from '@hapi/boom';

import { Category, Product } from "../models/index.js";
class CategoryController {
    constructor() { }

    async getAllCategories(req, res, next) {
        try {
            const categories = await Category.findAll();
            res.status(200).json(categories);
        } catch (error) {
            next(error)
        }
    }

    async getOneCategory(req, res, next){
        try {
            const { id } = req.params;
            //Busqueda de la categoria y productos asociados.
            const category = await Category.findByPk(id, {
                include: [
                    {model: Product}
                ]
            })
            //Respuesta en caso de encontrar la categoria.
            if (!category) {
                throw boom.notFound('Categoria no existe')
            }
            res.status(200).json( {data: category});
        } catch (error) {
            next(error)
        }
    }


}

export default CategoryController;