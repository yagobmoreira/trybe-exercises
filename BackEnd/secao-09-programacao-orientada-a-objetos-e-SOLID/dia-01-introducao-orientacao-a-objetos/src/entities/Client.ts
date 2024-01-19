export default class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string { return this._name; }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    }
    this._name = newName;
  }
}