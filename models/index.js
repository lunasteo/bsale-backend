import Category from './Category.js';
import Product from './Product.js';

Category.hasMany(Product, {foreignKey: 'category'})

export {
    Category,
    Product
}