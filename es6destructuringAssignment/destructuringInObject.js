// js에서 object(객체)와 property(속성)?
/*
객체 지향 언어인 javascript에서의 '객체'인 object
property는 그런 object의 속성을 뜻하며,
이름(name/key)과 값(value)의 연결로 이루어진다. 둘의 관계는 object는 property의 모음이라고 생각하면 쉽다.
*/

// byeongrok은 객체
const byeongrok = {
    age: 17,
    univ: 'cau',
    major: 'software'
}

// byeongrok 객체의 age, univ 프로퍼티를 해체하여 새로운 변수인 age, univ에 할당한 것. 
const {age, univ} = byeongrok;
console.log(age);
console.log(univ);
console.log(byeongrok);

// 새로운 이름 (koreanAge)로 변수를 만들고 싶다면?
const {age:koreanAge} = byeongrok;
console.log(koreanAge);
