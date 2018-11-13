import React from 'react';

// Component zbudowany za pomoca zwyklej funkcji
// dzieki propsom mozemy przekazywac wartosci do komponentu z zewnatrz
const person = (props) => {
    return (
        <div>
            <p>I`m a {props.name} and i have a {props.age} years old</p>
            {/* props children reprezentuje wszystko co się zawiera miedyz znacznikami danego componentu
            może to być zwykły teks, może to być kod JavaSvript albo inny component react itp... */}
            <p>{props.children}</p>
        </div>
       
        
        )
}

export default person;