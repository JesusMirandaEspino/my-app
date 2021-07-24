import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'


import  PrimeraApp  from '../PrimeraApp';


describe( 'Primera App', () => { 

    test( ' Debe de mostrar el mensa "Hola soy Goku"',  () => {

        const saludo = 'Hola, soy Goku';

        const { getByText } = render( <PrimeraApp saludo="saludo" />);

        expect( getByText(saludo) ).ToBeInTheDocument(  );
        
});


} );

