import boom from '@hapi/boom';
import db from "../config/db.js";
import { Product } from "../models/index.js"; 
class ProductController {
    constructor(){}

    async getAllProducts(req, res, next){
        try {
            const { page= 0, size= 5} = req.query;
            let options = {
                limit: +size,
                offset: (+page) * (+size)
            };
            const { count, rows } = await Product.findAndCountAll(options);
            res.json({
                total: count,
                data: rows
            });
        } catch (error) {
            next(error)
        }
    }

    async getOneProduct(req, res, next){

    }

    async searchProduct(req, res, next){
        try {
            const { productSearch } = req.params;
            const query = `SELECT * FROM product where name LIKE "%${productSearch}%"`;
            const [data] = await db.query(query);
            if (data.length === 0) {
                throw boom.notFound('Proximamente agregaremos el productos que buscas')
            }
            
            res.json(data);
        } catch (error) {
            next(error)
        }
    }

}

export default ProductController;