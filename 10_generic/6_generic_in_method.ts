// Method에서 Generic 사용하기
class Idol<T> {
   id: T;
   name: string;

   constructor(id: T, name: string) {
      this.id = id;
      this.name = name;
   }

   sayHello<Time>(logTime: Time) {
      return `[${logTime}] 안녕하세요 제 이름은 ${this.name}이고 Id는 ${this.id}입니다.`
   }
}

