import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

// Component zbudowany za pomoca dziedziczenia z Reactowego Objectu Component
class App extends Component {
  state = {
    persons: [
      { id: 2, name: "Lech", age: 34 },
      { id: 3, name: "Malusinska", age: 30 },
      { id: 4, name: "Andrzej", age: 45 }
    ],
    otherState: "to jest jakis tam state",
    showPersons: false
  }

  // zarezerwowane slowo kluczowe dla komponentów zbudowanych tylko poprzez extends Component to 'State'
  // state zarzadza stanem componentu z jego wnetrza (zarzadza danymi componentu w jego wnetrzu)

  nameChangedHandler = (event, id) => {
    // najpier szukamy konkretnej osoby (id tej osoby) której value name chcemy zmienić poprzez pisanie w inpucie
    // find() dziala podobnie jak map, czyli dla kazdego elementu tablicy wykonuje ta samom czynnosc, w tym 
    // wypadku sprawdza czy id tablicy zgadza sie z id przekazanym do funkcjii zwraca true albo false

    const personIndex = this.state.persons.findIndex(el => {
      return el.id === id;
    })
    console.log(personIndex);
    // tworzymy kopie konkretnego obiektu (osoby) do zmiany stanu
    const person = {
      ...this.state.persons[personIndex]
    }
    console.log(person)
    // przypisujemy do imienia danej osoby value lapane przez event czyli:
    person.name = event.target.value;

    // znowu tworzymy kopie tablicy persons
    const persons = [...this.state.persons];
    // aktualizujemy ja o zmiane przeprowadzoną po evencie (zmiane name)
    persons[personIndex] = person;

    // na samym koncu modyfikujemy state
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // uzywamy metody slice() która wyodrebia fragment tablicy i zwraca go jako nowa tablicy.
    // bez tego do zmiennej persons przypisalibysmy (typy referencyjne tablica) ogrinalny stan aplikacji
    // który jesli byłby pozniej zmieniony moglby prowadzić do nieprzewidywalnych sytuacji.
    // lub np operatora rozproszenia ... który tez stworzy nowa tablice
    // czyli zmieniajac stan zawsze robmy kopie i dopiero updajtujemy, bez zmianny orginalnego stanu
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
    // wlasciwosc key={} powinno sie dopisywać zeby kazdy komponent mial swoj unikalny indentyfikator
    // dzieki czemu react dokladnie wiec ktory element kakretnie sie zmienil. lepsza wydajnosc przy np bardzo 
    // dlugich listach

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)}
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
