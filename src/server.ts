// console.log("Hola academia online..");

import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use('*', cors());

app.use(compression());

app.get('/', (re, res) => {
    res.send('Hola a la academia online en GraphQL');
});

const httpServer = createServer(app);

const PORT = 5200;

httpServer.listen(
    {
        port: PORT
    }, 
    () => console.log(`Servidor academia online listo http://localhost:${PORT}`)
);