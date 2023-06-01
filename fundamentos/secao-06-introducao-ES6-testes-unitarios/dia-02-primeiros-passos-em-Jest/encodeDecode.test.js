const { mapString, encode, decode } = require('./encodeDecode');

describe('Testes para a função "encode"', () => {
  it('Testar se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  it('Testar na função encode as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('a e i o u')).toBe('1 2 3 4 5');
  });
  it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(encode('b c d f g')).toBe('b c d f g');
  })

  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('b c d f g').length).toBe(('b c d f g').length);
  })

});

describe('Testes para a função "decode"', () => {
  it('Testar se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('Testar na função decode  números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('1 2 3 4 5')).toBe('a e i o u');
  });

  it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(decode('6 7 8 9')).toBe('6 7 8 9');
  })

  it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('6 7 8 9 10').length).toBe(('6 7 8 9 10').length);
  }) 
});