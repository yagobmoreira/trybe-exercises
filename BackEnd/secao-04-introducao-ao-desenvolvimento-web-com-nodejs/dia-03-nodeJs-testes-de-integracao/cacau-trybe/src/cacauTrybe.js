const fs = require('fs').promises;
const { join } = require('path');

const path = '/files/cacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const writeCacauTrybeFile = async (content) => {
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(content));
  } catch (error) {
    console.error('Erro ao salvar o arquivo', error);
    return null;
  }
}

const updateChocolate = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates
    .map((chocolate) => {
      if (chocolate.id === id) return { ...chocolate, ...update };
      
      return chocolate; 
    });
    await writeCacauTrybeFile(cacauTrybe);
    return { ...chocolateToUpdate, ...update };
  }
  return false;
}

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const findChocolateByName = async (query) => {
  const chocolates = await getAllChocolates();
  const filteredChocolates = chocolates.filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
  return filteredChocolates;
}



module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  findChocolateByName,
  updateChocolate,
};
