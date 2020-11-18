const {sum, vezes, calculaDesconto} = require('./operacoes');

test('Somar 1 + 2 resultado 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Somar 2 + 2 resultado 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('Multiplicar 3 * 3 resultado 9', () => {
  expect(vezes(3, 3)).toBe(9)
})

test('Descontar 200 de 1000  resultado 800', () => {
  expect(calculaDesconto(1000, 200, 1)).toBe(800)
})

test('Descontar 200 de 1000  resultado 800', () => {
  expect(calculaDesconto(1000, 200, 0)).toBe(800)
})

test('Descontar 100 de 1000 resultado 900', () => {
  expect(calculaDesconto(1000, 100, 2)).toBe(800)
})


test('Descontar 1100 de 1000 resulto 0', () => {
  expect(calculaDesconto(1000, 100, 11)).toBe(0)
})

test('Descontar 0 de 100 resultado 0', () => {
  expect(calculaDesconto(0, 100, 1)).toBe(0)
})

test('Descontar 100 de -100 resultado 0', () => {
  expect(() => calculaDesconto(-100, 100, 1)).toThrow("Valor Menor que zero!");
})

test('Descontar 100 de -100 resultado 0', () => {
  expect(() => calculaDesconto("teste", 100, 1)).toThrow("Valor não é numérico!");
})

test('Descontar 0 de 100 resultado 0', () => {
  expect(calculaDesconto(1100, 100, 1, true)).toBe(1050)
})

test('Descontar 100 de 1100 sem applicar 1000', () => {
  expect(calculaDesconto(1100, 100, 1)).toBe(1000)
})

test('Descontar 100 de 1100 sem applicar 1000', () => {
  expect(calculaDesconto(950, 100, 1)).toBe(850)
})

test('Descontar 100 de 1100 sem applicar 1000', () => {
  expect(calculaDesconto(950, 100, 1, true)).toBe(850)
})

test('Descontar 100 de 1100 sem applicar 1000', () => {
  expect(calculaDesconto(950, 100, 1, false)).toBe(850)
})

test('Descontar 12000 de 500 aplicar 995', () => {
  expect(calculaDesconto(12000, 100, 1, false)).toBe(1190)
})

test('Descontar 12000 de 500 aplicar 995', () => {
  expect(calculaDesconto(12000, 100, 1, true)).toBe(1195)
})



