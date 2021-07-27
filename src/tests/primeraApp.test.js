import React from 'react';
import '@testing-library/jest-dom';
//  Render import { render } from '@testing-library/react'

import { shallow } from 'enzyme'
import  PrimeraApp  from '../PrimeraApp';




describe( 'Primera App', () => { 


    /*  No se utlizara esta prueba 
    test( ' Debe de mostrar el mensa "Hola soy Goku"',  () => {
        const saludo = 'Hola, soy Goku';
        const { getByText } = render( <PrimeraApp saludo={saludo} />);
        expect( getByText(saludo) ).toBeInTheDocument(  );
    });  */


    test( 'Debe de mostar <PrimeraApp/> correctamente', () => {

        const saludo = 'Hola a todos';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } />);

        expect( wrapper ).toMatchSnapshot();

    });


    test( 'Debe mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola a todos';
        const subtitulo = 'soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subtitulo }
                />);

        const textoParrafo = wrapper.find( 'p' ).text();

        expect( textoParrafo  ).toBe( subtitulo );


    });



} );
