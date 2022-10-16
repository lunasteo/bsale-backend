// importacion de framework
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

//importaciones de funciones propias
import routerApi from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

//Middlewars
app.use(express.json());
app.use(cors());

//Routing
routerApi(app);

//App para iniciar API
const startServer = () => {
    app.listen(port, () => {
        console.log(`API running on http://127.0.0.1:${port}/`)
    })
}

//Inicio de API
startServer();