import LongRangeCharacter from "./Entities/LongRangeCharacter";
import MeleeCharacter from "./Entities/MeleeCharacter";

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();