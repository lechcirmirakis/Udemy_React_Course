// komponent wyzszego rzedu, mozemy w niego "owinać" inne elementy, dzięki temu nie musimy 
// stosować dodatkowego diva do owinięcia elementów w komponencie

import React from 'react';

const aux = (props) => props.children;

export default aux;