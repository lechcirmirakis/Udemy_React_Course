import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hi, I am React App :)</h1>
          <p>This is really working</p>
          <Person name="Lech" age="34"/>
          <Person name="Malusinska" age="30">My hobby Is Raicing</Person>
          <Person name="Andrzej" age="45"/>
      </div>
    )
    // return  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am React Header 1'))
  }
}

export default App;
