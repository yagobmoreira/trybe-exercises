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