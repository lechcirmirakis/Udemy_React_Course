import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import wrappClass from '../hoc/WrappClass';

// Component zbudowany za pomoca dziedziczenia z Reactowego Objectu Component
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 2, name: "Lech", age: 34 },
        { id: 3, name: "Malusinska", age: 30 },
        { id: 4, name: "Andrzej", age: 45 },
        { id: 5, name: "Anna", age: 34 }
      ],
      otherState: "to jest jakis tam state",
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Metoda ta musi zwracać true lub false. Jesli zwracamy true proces update jest kontynułowany, jesli false
    // zatrzymujemy cały proces aktualizacji czyli dalszego cyklu czyli np render()

    console.log('[UPDATE App.js] Inside should ComponentUpdate', nextProps, nextState);
    // to samo co w persons.js sprawdzamy czy state się zmienił, jeśli nie to nie wykonujemy dalszych
    // instrukcji z cyklu zycia komponentu (wydajność)!
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // zarezerwowane slowo kluczowe dla komponentów zbudowanych tylko poprzez extends Component to 'State'
  // state zarzadza stanem componentu z jego wnetrza (zarzadza danymi componentu w jego wnetrzu)

  nameChangedHandler = (event, id) => {
    // najpier szukamy konkretnej osoby (id z arrayki tej osoby) której value name chcemy zmienić poprzez pisanie w inpucie
    // findIndex() dziala podobnie jak map, czyli dla kazdego elementu tablicy wykonuje ta samom czynnosc, w tym 
    // wypadku sprawdza czy id tablicy zgadza sie z id przekazanym do funkcjii zwraca true albo false

    const personIndex = this.state.persons.findIndex(el => {
      return el.id === id;
    })

    // tworzymy kopie konkretnego obiektu (osoby) do zmiany stanu
    const person = {
      ...this.state.persons[personIndex]
    }
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

    // lepszy sposób mutowani stanu (dopisujemy prevState i do niego sie odwołujemy czyli do poprzadniego statu
    // przed kliknieciem)
    
    this.setState((prevState, props) => {
        return {
          showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked + 1
        } 
      });
  }

  render() {
    console.log('[App.js] Inside Render()');

    let persons = null;
    // wlasciwosc key={} powinno sie dopisywać zeby kazdy komponent mial swoj unikalny indentyfikator
    // dzieki czemu react dokladnie wiec ktory element kakretnie sie zmienil. lepsza wydajnosc przy np bardzo 
    // dlugich listach

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }

    return (
      <Auxiliary classes={classes.App}>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonHandler}
        />
        {persons}
      </Auxiliary>
    )

    // return  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am React Header 1'))
  }
}
// "opakowywujemy" component App w funkcje wrappClass która przyjmuje dwa parametry, zwracany component i className
// dla zwracanego komponentu
export default wrappClass(App, classes.App);
