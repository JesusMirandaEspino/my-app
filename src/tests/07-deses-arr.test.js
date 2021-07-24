import '@testing-library/jest-dom';


import { retornaArreglo } from '../base/07-deses-arr';


describe( 'Pruebas en el archivo tamplate deses-arr.js', () => { 


        test( 'Prueba en el metodo retornaArreglo retornando un arreglo con un string y un numero', () => { 


            const [ letras, numeros ] = retornaArreglo(); // debe de retornar ['ABC', 123]

           //  expect general expect( arr ).toEqual( ['ABC', 123] );

            expect( letras ).toBe( 'ABC' );
            expect( typeof letras ).toBe( 'string' );

            expect( numeros ).toBe( 123 );
            expect( typeof numeros ).toBe( 'number' );
    });








} );


