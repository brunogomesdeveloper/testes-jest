function sum(a, b) {
    return a + b;
}

function vezes(a, b) {
    return a * b
}

function calculaDesconto(valor, desconto, fator, aplicar) {
    let descontoTotal;
    let resultado;

    if (valor < 0)
        throw "Valor Menor que zero!"

    if (!(typeof valor === "number"))
        throw "Valor não é numérico!"
    
    if (aplicar && (valor > 1000))
        descontoTotal = 50;
    else
        descontoTotal = (desconto * (fator === 0 ? 1 : fator))

    resultado = descontoTotal > valor ? 0 : valor - descontoTotal;

    resultado = valor >= 10000 ? resultado / 10 : resultado;

    return resultado
}

module.exports = { sum, vezes, calculaDesconto };