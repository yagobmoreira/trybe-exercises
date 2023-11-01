const doMath = async (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject('Informe apenas números');
    }
    const result = (a + b) * c;
    if (result < 50) return reject('Valor muito baixo');
    resolve(result);
  });
}

const firstResolve = async () => {
  try {
    const result = await doMath(1, 2, 3);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
firstResolve();

const secondResolve = async () => {
  try {
    const result = await doMath("z", 2, 3);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
secondResolve();

const thirdResolve = async () => {
  try {
    const result = await doMath(20, 30, 3);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
thirdResolve();