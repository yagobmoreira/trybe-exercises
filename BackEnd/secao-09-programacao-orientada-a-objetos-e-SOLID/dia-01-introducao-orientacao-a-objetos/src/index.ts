class Person {
  name: string;
  height: number;
  weight?: number; // o caractere "?" indica um atributo opcional

  constructor(n: string, h: number, w?: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
// aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
const p2 = new Person('João', 175);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 undefined
Maria: zzzzzzz
João: zzzzzzz
*/

class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution}
    connections: ${this.connections}`
    );
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wi-Fi']);

tv1.turnOn();

