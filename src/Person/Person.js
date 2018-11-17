import React from 'react';
import './Person.css';

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

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I`m a {props.name} and i have a {props.age} years old</p>
            {/* props children reprezentuje wszystko co się zawiera miedyz znacznikami danego componentu
            może to być zwykły teks, może to być kod JavaSvript albo inny component react itp... */}
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} type="text" />
        </div>
    )
}

export default person;