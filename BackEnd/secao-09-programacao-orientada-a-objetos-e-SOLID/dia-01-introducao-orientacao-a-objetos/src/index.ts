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
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution}`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  };

  set connectedTo(newValue: string) {
    if (!newValue || this._connections.includes(newValue)) {
      this._connectedTo = newValue;
      console.log(this._connectedTo);
    } else {
      console.log(`Sorry, connection unavailable`);
    }
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);

const tv2 = new Tv('Samsung', 42, 'Full HD', ['HDMI', 'Ethernet', 'Wi-Fi']);

tv2.connectedTo = 'HDMI';
console.log(tv2.connectedTo);

tv1.turnOn();

