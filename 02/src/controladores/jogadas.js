const jogadores = require('../bancoDeDados/dadosJogadores');

const jogadas = (req, res) => {
    let i = 0;
    if (i == jogadores.length) {
        i = 0;
    }
    //let jogadorDaVez = jogadores[i];
    res.send(`É a vez de ${jogadores[i]} jogar!`)
    i++;
}

const removerJogador = (req, res) => {
    const { indice } = req.query;
    let i = Number(indice);
    jogadores.splice(i, 1);
    if (i > jogadores.length) {
        res.send(`Não existe jogador no índice informado (${i}) para ser removido.`)
    } else {
        res.send(`${jogadores}`);
    }
};

const adicionarJogador = (req, res) => {
    const { nome } = req.query;
    jogadores.push(nome);
    res.send(`${jogadores}`);
};

const adicionarJogadorIndice = (req, res) => {
    const { nome, indice } = req.query;
    const nomeFormatado = (nome) => {
        const primeiraLetra = nome.slice(0, 1).toUpperCase()
        const restopalavra = nome.slice(1).toLowerCase()
        return `${primeiraLetra + restopalavra}`;
    }
    jogadores.splice(indice, 0, nomeFormatado(nome));
    if (indice > jogadores.length) {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
    } else {
        res.send(`${jogadores}`);
    }
};

module.exports = {
    jogadas,
    removerJogador,
    adicionarJogador,
    adicionarJogadorIndice
}