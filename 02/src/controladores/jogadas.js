const jogadores = require('../bancoDeDados/dadosJogadores');

let = jogadorDaVez = 0;
const jogadas = (req, res) => {

    const nomeJogador = jogadores[jogadorDaVez];

    jogadorDaVez++;

    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }

    res.send(`É a vez de ${nomeJogador} jogar!`)

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