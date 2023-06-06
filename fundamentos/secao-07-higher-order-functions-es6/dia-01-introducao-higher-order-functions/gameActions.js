const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
// Math.floor(Math.random() * (max - min + 1) + min)

const dragonDamage = () =>
  Math.floor(Math.random() * (battleMembers.dragon.strength - 15 + 1)) + 15;

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () =>
  Math.floor(
    Math.random() *
      (battleMembers.warrior.strength * battleMembers.warrior.weaponDmg -
        battleMembers.warrior.strength +
        1)
  ) + battleMembers.warrior.strength;

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageStatus = () => {
  let obj = {
    dano: (obj) => {
      if (obj.mana >= 15) {
        return (
          Math.floor(
            Math.random() *
              (battleMembers.mage.intelligence * 2 -
                battleMembers.mage.intelligence +
                1)
          ) + battleMembers.mage.intelligence
        );
      } 
      return `Não possui mana suficiente`;    
    },
    mana: 15,
  };
  return obj
};

// console.log(mageStatus().dano(mageStatus()));

// Parte 2
const gameActions = {
  primeiraHOF: (warriorDamage) => {
    const warriorDmg = warriorDamage();
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  segundaHOF: (mageDamage) => {
    const mageDmg = mageStatus().dano((mageStatus()));
    console.log(mageDmg);
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
    mage.mana -= 15;
  },
  terceiraHOF: (dragonDamage) => {
    const dragonDmg = dragonDamage();
    dragon.damage = dragonDmg;
    warrior.healthPoints -= dragonDmg;
    mage.healthPoints -= dragonDmg;
  },
  returnObject: () => {
    gameActions.primeiraHOF(warriorDamage);
    gameActions.segundaHOF(mageStatus);
    gameActions.terceiraHOF(dragonDamage);
    return battleMembers;
  }
};

console.log(gameActions.returnObject());


