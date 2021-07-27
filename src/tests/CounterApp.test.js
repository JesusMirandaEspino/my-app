import React from 'react';
import '@testing-library/jest-dom';


import { shallow } from 'enzyme'
import  CounterApp  from '../CounterApp';




describe( ' CounterApp', () => { 

    let wrapper;


    beforeEach( () => {
            wrapper = shallow( <CounterApp />);
    } );

    test( 'Debe de mostar < CounterApp/> correctamente', (  ) => {

        

        expect( wrapper ).toMatchSnapshot();
    });



    test( 'Debe mostrar el counter valor enviado por props', () => {

        const wrapper = shallow( 
            <CounterApp 
                value={ 100 } 
            />);

        const valueCounter = wrapper.find( 'h3' ).text().trim();

        expect( valueCounter  ).toBe( '100' );
    });




    test( 'Debe de incrementar con el boton +1', () => {

        wrapper.find('button').at(0).simulate( 'click' );

        const valueCounter = wrapper.find( 'h3' ).text().trim();

        expect( valueCounter  ).toBe( '11' );

    } );


    test( 'Debe de incrementar con el boton -1', () => {

        wrapper.find('button').at(2).simulate( 'click' );

        const valueCounter = wrapper.find( 'h3' ).text().trim();

        expect( valueCounter  ).toBe( '9' );

    } );


} );
