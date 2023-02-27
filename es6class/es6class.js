// ES? ECMAScript의 약자이며 자바스크립트의 표준, 규격을 나타내는 용어이다.

class Developer {
    constructor(name){ // constructor: 생성자 -> 객체 초기화
      this.name = name; // 생성자의 매개변수는 새로 만들어지는 객체에 전달된다.
    }
  
    hello(){ // 메서드 (함수)
      return 'Hello World! I am ' + this.name + ' and I am a web developer';
    }
}

var byeongrok = new Developer('Byeong Rok');
byeongrok.hello();
console.log(byeongrok.hello());

class ReactDeveloper extends Developer { // ReactDeveloper라는 자식 클래스는 "extends"로 확장
  installReact() {
    return 'installing React... Done';
  }
}

var soohong = new ReactDeveloper();
console.log(soohong.installReact());

var jeongwon = new ReactDeveloper('Jeong Won'); // 부모클래스(Developer)에서 hello 메서드가 오버라이드 됨.
console.log(jeongwon.hello());
