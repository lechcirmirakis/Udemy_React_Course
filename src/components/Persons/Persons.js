import React, { PureComponent } from 'react';
import Person from './Person/Person';

// bedzie componenten zrobionym za pomocą funkcji bo nie zmieniamy i nie potrzebujemy tutaj state
class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
    }

    // Metoda ta musi zwracać true lub false. Jesli zwracamy true proces update jest kontynułowany, jesli false
    // zatrzymujemy cały proces aktualizacji czyli dalszego cyklu czyli np render()

    // sprawdzamy czy które kolwiek z wywoływanych na prosons metod została zmieniona (poprzez porównanie propsów).
    // jeśli nie zostały zmienione to react nie wykonuje dalej kolejnych etapów renderowania i aktualizacji componentu 
    // jest to dobra praktyka jesli mamy duza aplikacje i rozwiazuje problem z wydajnością

    // mozemy również to co jest podspodem zakomentowane zrobić extendujac komponent jako Pure Component, wtedy 
    // sam react sprawdza czy state/propsy zostały z aktualizowane i jesli  nie sa to nie renderuje dalej tresci

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside should ComponentUpdate', nextProps, nextState);
        
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    // }

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
                position={index}
                age={person.age}
                ref={this.lastPersonRef}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;
