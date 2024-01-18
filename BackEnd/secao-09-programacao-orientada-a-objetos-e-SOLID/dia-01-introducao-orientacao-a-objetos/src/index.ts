class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this.height = height;
    this._weight = weight;
    this._age = age;
  }

  getWeight(): number {
    return this._weight;
  }

  get age(): number {
    return this._age;
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday(): void {
    this._age += 1;
  }
}

const p1 = new Person('Maria', 181, 58, 19);
const p2 = new Person('João', 175, 66, 18);

p1.name = 'Maria Silva';
console.log(p1.name);
console.log(p1.getWeight());
console.log(p2.age);
p2.birthday();
console.log(p2.age);
p2.age = 21;
console.log(p2.age);
console.log(p1.height);


class Tv {
  public brand: string;
  public size: number;
  public resolution: string;
  public connections: string[];
  public connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution}`);
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);

const tv2 = new Tv('Samsung', 42, 'Full HD', ['HDMI', 'Ethernet', 'Wi-Fi']);

tv1.turnOn();

