const express = require('express');
const { jogadas } = require('./controladores/jogadas');

const app = express();

app.get('/', jogadas);


app.listen(8000, console.log('Servidor Inicializado...'));