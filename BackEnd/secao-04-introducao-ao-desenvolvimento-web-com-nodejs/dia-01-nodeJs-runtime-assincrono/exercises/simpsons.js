const data = require('./data/simpsons.json');

const readCharacters = () => {
  for (character in data) {
    console.log(`${data[character].id} - ${data[character].name}`);
  }
}

readCharacters();