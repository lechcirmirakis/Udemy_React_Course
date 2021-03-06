import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Auxiliary from '../../../hoc/Auxiliary';
import wrappClass from '../../../hoc/WrappClass';
// importujemy globalny context z app.js
import { AuthContext } from '../../../containers/App';

// Component zbudowany za pomoca zwyklej funkcji
// dzieki propsom mozemy przekazywac wartosci do komponentu z zewnatrz
// ale jak ze nie jest to component zbudowany przez extend z klasy component, nie mozemy
// uzywajć tu statów

// powinnismy jak najwiecej uzywac tej metody do tworzenia komponentów. Sa to komponetny ktore 
// przyjumuja jakies dane poprzez propsy, mozemy donich dopisywac logike i renderujemy dzieki
// nim component w domie (dynamicznie)!!, ale te componenty nie zmieniaja stanu naszej aplikacji!!!!

// Stan aplikacji powinien zmieniac sie tylko w kilku głownych komponentach, które mozna nazwac kontenerami

// mozemy przekazac poprzez propsy do komponentu rowniez metode z componentu "wyzszego", 
// dzieki temu mozemy wywolac metode w komponencie ktory niema bezposrednio dostepu do stanu aplikacji

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef(); // stworzenie referencji w React 16 mozemy to juz zrobić w konstruktorze
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        // tutaj mozemy korzystać z referencji poniewaz ta metoda wywołuje sie juz po renderze componentu
        if (this.props.position === 0) {
            //this.inputElement.focus(); // gdy dodamy referencje w render()
            this.inputElement.current.focus() // gdy dodamy referencje w konstruktorze (musimy dodać current)
        }
    }

    focus() {
        this.inputElement.current.focus()
    }

    render() {
        console.log('[Person.js] Inside Render()');
        return (               
            <Auxiliary>
                {/* pobieramy state login z glownego komponentu poprzez kontekst tutaj jako consumer */}
                <AuthContext.Consumer>
                    {auth => auth ? <p>Jestem Zalogowany</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I`m a {this.props.name} and i have a {this.props.age} years old</p>
                {/* props children reprezentuje wszystko co się zawiera miedzy znacznikami danego componentu
                    może to być zwykły tekst, może to być kod JavaSvript albo inny component react itp... */}
                <p>{this.props.children}</p>
                <input
                    // referencje dostępne sa tylko w koponentach stworzonych za pomoca extends
                    // mozemy dodawać (tworzyć) w renderowaniu nowe własciwosci dla klasy
                    // ref={(inp) => { this.inputElement = inp }} - dodana referencja
                    ref={this.inputElement}
                    onChange={this.props.change}
                    value={this.props.name}
                    type="text"
                />
            </Auxiliary>
        )

        // jeśli chcemy uniknąć opakowywania elementów w jeden główny element przy returnie, mozemy zrobić to za 
        // pomocą tablicy (jak w przykladzie pod spodem), dodajemy key na sztywno do kazdego elementu
        // return [
        //     <p key="1" onClick={this.props.click}>I`m a {this.props.name} and i have a {this.props.age} years old</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" onChange={this.props.change} value={this.props.name} type="text" />,
        // ]
    }
}


// walidacja typów zmiennych, dzieki dodatkowej bibliotece propTypes możemy ustalać konkretne rodzaje danych 
// dla propsów. np ustaliliśmy że age musi być numberem, jesi wpiszemy string wyskoczy błąd. Przydatne
// gdy piszemy aplikacje w pare osób i ktoś inny może korzystać z naszego zbudowanego komponentu

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default wrappClass(Person, classes.Person);