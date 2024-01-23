import LongRangeCharacter from "./entities/LongRangeCharacter";
import MeleeCharacter from "./entities/MeleeCharacter";
import Character from "./entities/Character";
import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);


// Exercícios

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
trybeClube.adicionarQuadra(quadraFutebol);

// data que queremos reservar, aqui você pode colocar qualquer data obedecendo ano-mes-dia
const dataReserva = new Date('2022-12-28');

const reservarQuadraFutebol = trybeClube
  .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
  .reservar(dataReserva); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar
  console.log(reservarQuadraFutebol);