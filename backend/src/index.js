const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const connection = require('./connection');

const app = express();

mongoose.connect(connection, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT DELETE

// Tipos de parÂmetro
// Query params: request.query (Filtros, ordena~çao, paginação, ...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.listen(3333);