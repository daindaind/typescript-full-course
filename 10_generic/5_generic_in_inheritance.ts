class BaseCache<T> {
   data: T[] = [];
}

class StringCache extends BaseCache<string>{}

const stringCache = new StringCache();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T> {
   message?: Message;

   constructor(message?: Message) {
      super();
      this.message = message;
   }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;


// generic의 ingeritance
interface BaseGeneric {
   name: string;
}

// 타입 T는 무조건 name 프로퍼티가 존재할 수 있도록 만듦
class Idol<T extends BaseGeneric> {
   information: T;

   constructor(information: T) {
      this.information = information;
   }
}

const dain = new Idol({
   name: '다인',
   // age: 23     // age는 필수가 아님. name은 꼭 있도록 강제되었음
});

// keyof 와 함께 사용하기
const testObj = {
   a: 1,
   b: 2,
   c: 3,
}

function objectParser<O, K extends keyof O>(obj: O, key: K) {
   return obj[key];
}

// 키는 무조건 testObj의 키 중에 하나가 된다.
const val = objectParser(testObj, 'c');



class Idol2 {
   type?: string;
}

class FemaleIdol extends Idol2 {
   type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
   type: 'Male Idol' = 'Male Idol';
}

type SpecficIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;
const idol2: SpecficIdol<MaleIdol> = new MaleIdol();