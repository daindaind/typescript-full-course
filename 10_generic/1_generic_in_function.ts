// Generic 함수에서 사용하기

function whatValue(value: any) {
   return value;
}

const value = whatValue('test');

function genericWhatValue<T>(value: T): T{
   return value;
}

// 해당 함수의 prop 타입이 string이므로, 반환 타입도 string
const genericResult1 = genericWhatValue<string>('123');

// 여러개의 제네릭 사용하기
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
   return {
      x,
      y,
      z
   }
}
const multipleGenericResult = multipleGenerics<number, boolean, string>(
   123,
   true,
   '123'
);

// constructor 타입 제네릭으로 표현하기
class Idol {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }
}

class Car {
   brand: string;
   codeName: string;

   constructor(brand: string, codeName: string) {
      this.brand = brand;
      this.codeName = codeName;
   }
}

function instantiator<T extends {new (...arg: any[]) : {}}>(constructor: T, ...args: any[]) {
   return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));