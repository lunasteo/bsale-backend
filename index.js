// importacion de framework
import express from 'express';
import cors from 'cors'

//importaciones de funciones propias
import routerApi from "./routes/index.js";
import { connectDb } from './config/db.js';
import { logErrors, errorHandler, boomErrorHandler } from './middlewares/errorHandler.js'

// Variables
const app = express();
const port = process.env.PORT || 3000;

//Middlewars
app.use(express.json());
app.use(cors());

//Conexion a al DB
connectDb();
//Routing
routerApi(app);

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