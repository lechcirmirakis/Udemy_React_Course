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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {
            this.state.persons.map((person, index) => {
              return <Person
                click = {() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                />
            })
          }
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
