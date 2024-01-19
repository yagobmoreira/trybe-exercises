class Superclass {
  constructor(public isSuper: boolean = true) { }

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor (public isSuper: boolean = false) {
    super(isSuper);
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
  console.log(obj.isSuper ? 'Super' : 'Sub');
}

const superObj = new Superclass();
const subObj = new Subclass();

myFunc(superObj);
myFunc(subObj);

// Implementando Interfaces

interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;  
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `A soma dos valores ${myParam} e ${this.myNumber} é igual a ${myParam + this.myNumber}`;
  }
}

const myObj = new MyClass(10);
console.log(myObj.myFunc(5));


// Herança e Composição
interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string) {
    console.log(param)
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string) {
    console.log(`Logger2: ${param}`)
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string) {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`)
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');