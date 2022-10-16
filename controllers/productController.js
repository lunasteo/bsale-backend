import db from "../config/db.js";
import { Product } from "../models/index.js"; 
class ProductController {
    constructor(){}

    async getAllProducts(req, res, next){
        try {
            const productList = await Product.findAll();
            res.json({
                data: productList
            })
        } catch (error) {
            next(error)
        }
    }

    async getOneProduct(req, res, next){

    }

    async searchProduct(req, res, next){
        
    }

}

export default ProductController;