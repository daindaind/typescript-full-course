// 추상클래스
// 인스턴스화를 하지 못하게 함.

abstract class ModelWithId {
   id: number;

   constructor(id: number) {
      this.id = id;
   }
}

// 추상클래스는 인스턴스를 만들 수 없다.
// const modelWithId = new ModelWithId(123);

class Product extends ModelWithId{

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod{
   // 추상메서드도 만들 수 있다.
   // 메서드의 body를 만들지 않아도 된다.
   abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod{
   // 추상클래스를 상속받았기 때문에
   // 선언된 추상메서드가 자동완성으로 입력될 수 있다.
   shout(name: string): string {
      return '';
   }
}