// importacion de framework
import express from 'express';
import dotenv from 'dotenv';

//importaciones de funciones propias
import routes from './routes/index.js';

//Variables
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use('/', routes)

//App para iniciar API
const startServer = () => {
    app.listen(port, () => {
    console.log(`API running on http://127.0.0.1:${port}/`)
    })
}

//Inicio de API
startServer();