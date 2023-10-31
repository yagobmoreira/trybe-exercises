const fs = require('fs').promises;

const main = async () => {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf8');
    console.log(data);    
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
}

main();