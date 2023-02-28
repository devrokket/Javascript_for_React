// 자바스크립트 ES5의 배열 메서드인 map 과filter 메서드
// React 애플리케이션을 만들 때 가장 많이 쓰이는 ES5 피처

const users = [
    {name:byeongrok, age:24},
    {name:karina, age:24},
    {name:winter, age: 22}
];

import React, { Component } from 'react';

// 배열의 각 요소를 map을 이용해 뽑아내 render()에서 사용할 수 있습니다. 아래와 같이 말이죠.
class App extends Component {
    render() {
        const users = [
            {name:byeongrok, age:24},
            {name:karina, age:24},
            {name:winter, age: 22}
        ];
    return (
        <ul>
          {users
            .map(user => <li>{user.name}</li>)
          }
        </ul>
        // data를 필터링(filter, 가공하여 필요한 것만 남겨서)해서 render()에서 쓸 수도 있습니다.
        // <ul>
        // {users
        //  .filter(user => user.age > 26)
        //  .map(user => <li>{user.name}</li>)
        // }
        // </ul>
        )
    }       
}
