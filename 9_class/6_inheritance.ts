class Parent {
   name: string;

   constructor(name: string) {
      this.name = name;
   }

   dance(): void {
      console.log(`${this.name}이 춤을 춥니다.`)
   }
}

class Child extends Parent {
   age: number;

   constructor(name: string, age: number) {
      super(name);
      this.age = age;
   }

   sing(): void{
      console.log(`${this.name}이 노래를 부릅니다.`);
   }
}

const dain = new Parent('다인');
const ahri = new Child('다인', 12);

dain.dance();
// dain.sing();     // 안됨.

ahri.dance();
ahri.sing();


// 자식은 부모타입이 될 수 있다.
// 그러나, 부모는 자식 타입이 될 수 없다.
let person: Parent;
person = dain;
person = ahri;

let person2: Child;
person2 = ahri;
// person2 = dain;   // 안됨


// TS에서는 위 현상을 가능하게 할 수 있다.
// (optional 프로퍼티를 유의하자.)
class Parent2 {
   name: string;

   constructor(name: string) {
      this.name = name;
   }
}

class Child2 extends Parent2{
   age?: number;

   constructor(name: string, age?: number) {
      super(name);
      this.age = age;
   }
}

const dain2 = new Parent2('다인');
const ahri2 = new Child2('아리', 20);

let child: Child2;
child = ahri2;

// 원래는 부모가 자식타입이 될 수 없다고 했으나,
// 자식 클래스의 age가 optional이라서, 부모 클래스와 구조가 똑같기 때문에
// 이런 현상이 가능해진 것이다.
child = dain2;