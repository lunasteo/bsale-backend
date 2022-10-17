// importacion de framework
import express from 'express';
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';

//importaciones de funciones propias
import routerApi from "./routes/index.js";
import { connectDb } from './config/db.js';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/errorHandler.js'

// Variables
const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Swagger config
import swaggerUI from'swagger-ui-express';
import swaggerJsDoc from'swagger-jsdoc';
const swaggerSpec = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Challange Bsale',
            version: '1.0.0'
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}

//Middlewars
app.use(express.json());
app.use(cors());

//Conexion a al DB
connectDb();
//Routing
routerApi(app);
app.use('/api/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));


//Middlewars de error post routing
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//App para iniciar API
const startServer = () => {
    app.listen(port, () => {
        console.log(`API running on http://127.0.0.1:${port}/`)
    })
}

//Inicio de API
startServer();