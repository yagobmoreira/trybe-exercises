const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, '../movies.json');

const readData = async () => {
  try {
    const data = await fs.readFile(moviesPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

const main = async () => {
  const data = await readData();
  console.log(data);
}
main();