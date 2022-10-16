import { DataTypes } from 'sequelize';
import db from '../config/db.js'

const Product = db.define('product', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ulrImage: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url_image'
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Product;