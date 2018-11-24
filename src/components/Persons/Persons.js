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
