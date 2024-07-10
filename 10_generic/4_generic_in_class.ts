// class에서 generic 사용하기

class Pagination<Data, Message> {
   data: Date[] = [];
   message?: Message;
   lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data;
pgData.message;
pgData.lastFetchedAt;

class Pagination2<Data, Message> {
   data: Data[] = [];
   message?: Message;
   lastFetchedAt?: Date;

   constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
      this.data = data;
      this.message = message;
      this.lastFetchedAt = lastFetchedAt;
   }
}

// const pgData2 = new Pagination2([123, 456]);
// pgData2.data;
// pgData2.message;        // 이렇게 제네릭 타입을 넣어주지 않으면 unknown
// pgData2.lastFetchedAt;  // 이렇게 제네릭 타입을 넣어주지 않으면 unknown

const pgData2 = new Pagination2<number, string>([123, 456]);
pgData2.data;
pgData2.message;
pgData2.lastFetchedAt; 