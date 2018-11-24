import React, { Component } from 'react';
import Person from './Person/Person';

// bedzie componenten zrobionym za pomocą funkcji bo nie zmieniamy i nie potrzebujemy tutaj state
class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props)
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Metoda ta musi zwracać true lub false. Jesli zwracamy true proces update jest kontynułowany, jesli false
        // zatrzymujemy cały proces aktualizacji czyli dalszego cyklu czyli np render()

        console.log('[UPDATE Persons.js] Inside should ComponentUpdate', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate () {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] Inside Render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;
