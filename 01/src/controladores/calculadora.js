const soma = (req, res) => {
    const { num1, num2 } = req.query;
    const total = Number(num1) + Number(num2);

    res.send(`${total}`);
};

const subtracao = (req, res) => {
    const { num1, num2 } = req.query;
    const total = Number(num1) - Number(num2);

    res.send(`${total}`);
};

const multiplicacao = (req, res) => {
    const { num1, num2 } = req.query;
    const total = Number(num1) * Number(num2);

    res.send(`${total}`);
};

const divisao = (req, res) => {
    const { num1, num2 } = req.query;
    const total = Number(num1) / Number(num2);

    res.send(`${total}`);
};


module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
};