import React from 'react';

import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';

const cockpit = (props) => {
    
    const assignedClasses = [];

    // tworzymy stan poczatkowy dla class buttona
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <Auxiliary>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working:</p>
            <button
                className={btnClass}
                onClick={props.click}>Toggle Persons</button>
                <button onClick={props.login}>Log in</button>
        </Auxiliary>
    )
}

export default cockpit;