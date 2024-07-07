// Visibility keyword
// 1) public (기본값) : 어디서든 접근이 가능하다.
// 2) protected : 현재 클래스 및 하위 (자식) 클래스에서 접근 가능하다.
// 3) private : 현재 클래스 내부에서만 접근 가능하다.

class PropertyTestParent {
   // ts에서만 존재
   public publicProperty = 'public property';
   protected protectedProperty = 'protected property';
   private privateProperty = 'private property';

   // js에서만 존재하는 문법임
   // js의 private 선언법
   #jsPrivateProperty = 'js private property';

   test() {
      this.publicProperty
      this.protectedProperty;
      this.privateProperty;
      this.#jsPrivateProperty;
   }
}

class PropertyTestChild extends PropertyTestParent {
   test() {
      this.publicProperty;
      this.protectedProperty;
      // 접근 불가능! private로 선언되었기 때문에.
      // this.privateProperty;
      // this.#jsPrivateProperty;
   }
}