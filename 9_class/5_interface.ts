interface Animal {
   name: string;
   age: number;
   jump(): string;
}

// interface를 상속하면 interface에 들어있는 모든 것들이
// 클래스에서 정의 되어야 함
class Dog implements Animal{
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   jump(): string {
      return `${this.name}이 점프를 합니다.`
   }

   // interface를 초과해서 어떤 것들을 정의해도 되지만
   // 미달되어서는 안됨
   dance() {

   }
}

let ori: any = new Dog('오리', 3);
// 반환값이 true일 때, object의 타입은 Animal이다. (타입 가드)
function instanceOfAnimal(object: any): object is Animal{
   return 'jump' in Object;
};
if (instanceOfAnimal(ori)){
   ori;
}

// 다중 인터페이스 구현
interface Pet {
   legsCount: number;
   bark(): void;
}

class Cat implements Animal, Pet{
   name: string;
   age: number;
   legsCount: number;

   constructor(name: string, age: number, legsCount: number) {
      this.name = name;
      this.age = age;
      this.legsCount = legsCount;
   }

   jump(): string {
      return `${this.name}이 점프를 합니다.`;
   }

   bark(): void {
      console.log('냐옹');
   }
}

// 인터페이스 두개를 인터섹션해서 써도 상관없다.
type AnimalAndPet = Animal & Pet;
class Cat2 implements AnimalAndPet{
   name: string;
   age: number;
   legsCount: number;

   constructor(name: string, age: number, legsCount: number) {
      this.name = name;
      this.age = age;
      this.legsCount = legsCount;
   }

   jump(): string {
      return `${this.name}이 점프를 합니다.`;
   }

   bark(): void {
      console.log('냐옹');
   }
}


// 잘못된 인터페이스.
// 타입이 중복되어서 never
// 인터페이스를 상속시킬 때 중복되는 타입이 없는지 파악해야 한다.
interface WrongInterface1 {
   name: string;
}
interface WrongInterface2 {
   name: number;
}
// class Person implements WrongInterface1, WrongInterface2 {
   // 다 안됨. => never 타입이 되어버림
   // name: number;
   // name: string;
   // name: string | number;
// }


// ⭐️ constructor 정의
class Idol {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }
}

interface IdolConstructor {
   new(name: string, age: number): Idol;  // ⭐️⭐️⭐️⭐️ (중요)
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
   return new constructor(name, age);
}

console.log(createIdol(Idol, '아이유',32));