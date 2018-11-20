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
    ],
    otherState: "to jest jakis tam state",
    showPersons: false
  }

  // zarezerwowane slowo kluczowe dla komponentów zbudowanych tylko poprzez extends Component to 'State'
  // state zarzadza stanem componentu z jego wnetrza (zarzadza danymi componentu w jego wnetrzu)

  switchNameHandler = (newName) => {
    this.setState({
      persons:
        [
          { name: newName, age: 34 },
          { name: "Wioletta Marciniak", age: 12 },
          { name: "Andrzej Gołota", age: 10 }
        ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:
        [
          { name: 'Lech', age: 34 },
          { name: event.target.value, age: 30 },
          { name: "Andrzej Gołota", age: 45 }
        ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Maksymilian")}
              changed={this.nameChangedHandler}>My hobby Is Raicing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> 
      )
    }
    
    return (
      <div className="App">
        <h1>Hi, I am React App :)</h1>
        <p>This is really working:</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Toggle</button>
          {persons}
      </div>
    )

    // return  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am React Header 1'))
  }
}

export default App;
