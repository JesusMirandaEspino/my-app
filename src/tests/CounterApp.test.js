import React from 'react';
import '@testing-library/jest-dom';


import { shallow } from 'enzyme'
import  CounterApp  from '../CounterApp';




describe( ' CounterApp', () => { 


    test( 'Debe de mostar < CounterApp/> correctamente', () => {

        const wrapper = shallow( <CounterApp />);

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


} );
