type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '다인';
// 이건 에러남.
// 제네릭 타입이 있는 타입에 제넬릭 타입 자리에 
// 타입을 따로 지정해주지 않았기 때문
// const genericString2: GenericSimpleType = '다인';


// 제네릭이 있는 인터페이스로 타입 지정할 때
// 해당 타입에서 받은 제네릭 타입을 넘겨줄 수 있다.
interface DoneState<T> {
   date: T[];
}
interface LoadingState {
   requestedAt: Date;
}
interface ErrorState {
   error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;


// 위에서 지정한 State 타입의 제네릭에
// string 타입을 지정
let state: State<string> = {
   date: ['123', '123'],
}
state = {
   requestedAt: new Date(),
}
state = {
   error: 'error',
}
