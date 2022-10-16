import { DataTypes } from 'sequelize';
import db from '../config/db.js'

const Category = db.define('category', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Category;