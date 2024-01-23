import Character from "./Character";

export default class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Hi. I'm ${this._name}. I can attack from a long range.`)
  }

  specialMove(): void {
    console.log(`${this._name} used ${this._specialMoveName}`)
  }
}