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

const main = async () => {
  const simpson = await readCharacterById('2');
  console.log(simpson);
}
main();