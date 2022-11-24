const express = require('express');
const { exibirImoveis, buscarImovel } = require('./controladores/cotroles');

const app = express();

app.get('/imoveis', exibirImoveis);
app.get('/imoveis/:id', buscarImovel);


app.listen(8000, console.log('Servidor Inicializado...'))