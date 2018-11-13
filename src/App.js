import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

// Component zbudowany za pomoca dziedziczenia z Reactowego Objectu Component
class App extends Component {
  state = {
    persons: [
      { name: "Lech", age: 34 },
      { name: "Malusinska", age: 30 },
      { name: "Andrzej", age: 45 }
    ]
  }
  // zarezerwowane slowo kluczowe dla komponentów zbudowanych tylko poprzez extends Component to 'State'
  // state zarzadza stanem componentu z jego wnetrza (zarzadza danymi componentu w jego wnetrzu)

  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App :)</h1>
        <p>This is really working:</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby Is Raicing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )

    // return  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am React Header 1'))
  }
}

export default App;
