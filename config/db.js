import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config({path: '.env'})

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD ,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export const connectDb = async () => {
    try {
        await db.authenticate();
        console.log('Conexion correcta');
        console.log('Conectado a la DB')
    } catch (error) {
        console.log(error)
    }
}

export default db;