import React from 'react';
import Person from './Person/Person';

// bedzie componenten zrobionym za pomocą funkcji bo nie zmieniamy i nie potrzebujemy tutaj state
const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        change={(event) => props.changed(event, person.id)}
    />
});

export default persons;
