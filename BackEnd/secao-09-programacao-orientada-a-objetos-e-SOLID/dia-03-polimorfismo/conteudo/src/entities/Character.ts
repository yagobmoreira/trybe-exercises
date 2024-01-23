export default abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character) {
    character.talk();
    character.specialMove();
  }
}