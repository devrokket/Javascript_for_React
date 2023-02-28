/*
화살표 함수(arrow function)는 ES6에서 도입된 새로운 피처입니다.
코드를 간결하고 읽기 쉽게 해줍니다.
*/

// regular function
const testFunction = function() {
    // content..
}

const arrowFunction = () => {
    // content..
}

const testFunction2 = (firstName, lastName) => {
    // 매개변수가 2개 이상일 때는 (괄호) 를 사용한다.
    return firstName+' '+lastName;
  }
  
  const singleParam = firstName => {
    // 매개변수가 하나일 때는 괄호를 생랼할 수 있다. 
    return firstName;
  }