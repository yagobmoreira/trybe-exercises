const myFizzBuzz = require("./myFizzBuzz");

describe('Testes para a função myFizzBuzz', () => {
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it('Caso num seja um número não seja divisível por 3 e 5, a função retorna o número', () => {
    expect(myFizzBuzz(2)).toBe(2);
  })
  it('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('texto')).toBeFalsy();
    expect(myFizzBuzz([])).toBeFalsy();
    expect(myFizzBuzz({})).toBeFalsy();
    expect(myFizzBuzz(true)).toBeFalsy();
    expect(myFizzBuzz(null)).toBeFalsy();
  })

 
});