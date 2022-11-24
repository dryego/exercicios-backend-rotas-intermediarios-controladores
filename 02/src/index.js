const express = require('express');
const { jogadas, removerJogador, adicionarJogador, adicionarJogadorIndice } = require('./controladores/jogadas');

const app = express();

//rotas
app.get('/', jogadas);
app.get('/remover', removerJogador);
app.get('/adicionar', adicionarJogador);
app.get('/adicionarnoindice', adicionarJogadorIndice);


app.listen(8000, console.log('Servidor Inicializado...'));