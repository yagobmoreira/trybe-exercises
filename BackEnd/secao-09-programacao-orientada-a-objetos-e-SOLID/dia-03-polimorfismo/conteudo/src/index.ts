import LongRangeCharacter from "./Entities/LongRangeCharacter";
import MeleeCharacter from "./Entities/MeleeCharacter";
import Character from "./Entities/Character";

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

// yoshi.talk();
// yoshi.specialMove();
// samus.talk();
// samus.specialMove();

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);