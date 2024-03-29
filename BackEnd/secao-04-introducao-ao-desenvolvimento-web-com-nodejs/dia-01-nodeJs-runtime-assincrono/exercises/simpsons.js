const data = require('./data/simpsons.json');
const fs = require('fs').promises;

const readCharacters = () => {
  for (character in data) {
    console.log(`${data[character].id} - ${data[character].name}`);
  }
}

const readCharacterById = async (id) => {
  try {
    const data = await fs.readFile('./data/simpsons.json', 'utf8');
    const characters = JSON.parse(data);
    const character = characters.find((character) => character.id === id);
    if (!character) throw new Error('id não encontrado');
    return character;
  } catch (err) {
    console.error(err);
  }
};

// Função para remover os caracteres com id = 6 e id = 10
const filterSimpsons = async () => {
  try {
    const data = await fs.readFile('./data/simpsons.json', 'utf8');
    const characters = JSON.parse(data);
    const filteredCharacters = characters
      .filter((character) => character.id !== '6' && character.id !== '10');
    await fs.writeFile('./data/simpsons.json', JSON.stringify(filteredCharacters));
  } catch (err) {
    console.error(err);
  }
}

const createNewSimpsonsJson = async () => {
  try {
    const fileContent = await fs.readFile('./data/simpsons.json', 'utf8');
    const simpsons = JSON.parse(fileContent);
    const newSimpsons = simpsons
      .filter((character) => Number(character.id) >= 1 && Number(character.id) <= 4);
    await fs.writeFile('./data/simpsonsFamily.json', JSON.stringify(newSimpsons));
  } catch (err) {
    console.error(err);
  }
}

const addNewCharacter = async () => {
  try {
    const fileContent = await fs.readFile('./data/simpsonsFamily.json', 'utf8');
    const simpsons = JSON.parse(fileContent);
    const newSimpsons = [...simpsons, { id: '5', name: 'Nelson Muntz' }];
    await fs.writeFile('./data/simpsonsFamily.json', JSON.stringify(newSimpsons));
  } catch (error) {
    console.error(error);
  }
}

async function replaceNelson() {
  try {
    const fileContent = await fs.readFile('./data/simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '5');
    const simpsonsWithMaggie = simpsonsWithoutNelson
      .concat([{ id: '15', name: 'Maggie Simpson' }]);
    return fs.writeFile('./data/simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
  } catch (error) { 
    console.error(error);
  }
}

const main = async () => {
  await replaceNelson();
}
main();