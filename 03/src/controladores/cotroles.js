const imoveis = require("../bacoDeDados/dadosImoveis")

const exibirImoveis = (req, res) => {
    res.send(imoveis);
};

const buscarImovel = (req, res) => {
    const { id } = req.params;
    const imovelEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(id);
    });
    res.send(imovelEncontrado);

};

module.exports = {
    exibirImoveis,
    buscarImovel
}