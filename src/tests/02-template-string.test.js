import '@testing-library/jest-dom';


import { getSaludo } from '../base/02-template-string';


describe( 'Pruebas en el archivo tamplate string.js', () => { 


        test( 'Prueba en el metodo getsaludo retornando nombre y espacio', () => { 

            const nombre = 'Jesus';

            const saludo = getSaludo(nombre);

            expect( saludo ).toBe( 'Hola ' + nombre );

    });

        test( 'Prueba en el metodo getsaludo retornando nombre opcional y espacio ', () => { 

            const saludo = getSaludo();

            expect( saludo ).toBe( 'Hola Mutuelo' );

    });



} );


