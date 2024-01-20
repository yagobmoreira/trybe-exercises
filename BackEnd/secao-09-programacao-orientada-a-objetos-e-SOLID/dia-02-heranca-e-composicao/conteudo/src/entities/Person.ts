export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.validatePerson();
    this._name = name;
    this._birthDate = birthDate;
  }

  get name() { return this._name };

  get birthDate() { return this._birthDate };

  set name(name: string) {
    this.validateName(name);
    this._name = name; 
  }

  set birthDate(date: Date) {
    this.validateBirthDate(date);
    this._birthDate = date;
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string) {
    if(name.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    }
  }

  private validateBirthDate(date: Date) {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data futura.');
    }
    if (Person.getAge(date) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }

  private validatePerson() {
    this.validateName(this.name)
    this.validateBirthDate(this.birthDate)
  }
}