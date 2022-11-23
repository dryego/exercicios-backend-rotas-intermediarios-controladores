const jogadores = require('../bancoDeDados/dadosJogadores');

const jogadas = (req, res) => {
    let i = 0;
    if (i == jogadores.length) {
        i = 0;
    }
    let jogadorDaVez = jogadores[i];
    res.send(`É a vez de ${jogadores[i]} jogar!`)
    i++;


}

module.exports = {
    jogadas,
}