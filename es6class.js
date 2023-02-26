class Developer {
    constructor(name){ // constructor: 생성자 -> 객체 초기화
      this.name = name;
    }
  
    hello(){
      return 'Hello World! I am ' + this.name + ' and I am a web developer';
    }
  }