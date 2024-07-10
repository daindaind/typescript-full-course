interface Cache<T>{
   data: T[];   // 어떤 타입의 데이터가 들어올 지 모르기 때문에 제네릭 타입으로
   lastUpdate: Date; 
}

// 얘는 이제 string으로 구성된 data만 들어올 수 있게됨
const cache1: Cache<string> = {
   data: ['data1', 'data2'],
   lastUpdate: new Date()
}

// 인터페이스의 제네릭 타입 자리에 어떤 타입을 지정할지를
// 정해줘야한다.
// 여기에서는 number
const cache2: Cache<number> = {
   data: [123, 123],
   lastUpdate: new Date()
}

interface DefaultGeneric<T = string> {
   data: T[];  
}

// const cache3: DefaultGeneric = {
   // data: [123, 456];  // string 타입이 아니라 에러 발생
// }   


