import React, { Component } from 'react';

class App extends Component {
  // class content
  render(){
    return (
      <h1>Hello React!</h1>
    )
  }
}

/*
This is what enables us to use the render() method, JSX, this.state, other methods.
All of this definitions are inside the Component class. 
But as we will see later, class is not the only way to define React Component. 
If you don't need state and other lifecycle methods, you can use a function instead.
*/