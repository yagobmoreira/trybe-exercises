/* Com o módulo fs, crie uma função que lê e escreve vários arquivos ao mesmo tempo.

    - Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
    - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'], faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string “Finalmente”, o nome do arquivo é file1.txt.
    - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.
    = O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!!. */

const fs = require('fs').promises;
const path = require('path');

const str = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const fileNames = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt'
];

const currentPath = path.resolve(__dirname);

const writeFiles = async () => {
  try {
    const promises = str.map(async (word, index) => {
      await fs.writeFile(path.resolve(currentPath, `file${index + 1}.txt`), word);
    });
    await Promise.all(promises);
    console.log('Arquivos criados e conteúdo escrito')
  } catch (error) {
    console.error(`Erro ao criar o arquivo: ${error.message}`);
  }
}

const arrayToFile = async () => {
  try {
    const readFilesPromises = fileNames
      .map((fileName) => fs.readFile(fileName, 'utf-8'));
    const fileContents = await Promise.all(readFilesPromises);
    const str = fileContents.join(' ');
    await fs.writeFile('./fileAll.txt', str);
    console.log('Arquivo criado e conteúdo escrito')
  } catch (error) {
    console.error(`Erro ao criar o arquivo: ${error.message}`);
  }
}

const main = async () => {
  await arrayToFile();
}

main();