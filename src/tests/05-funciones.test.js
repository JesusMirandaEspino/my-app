import '@testing-library/jest-dom';

import {  getUser, getUsuarioActivo } from '../base/05-funciones';


describe( 'Pruebas en el archivo funciones.js', () => { 


    test( 'getUser Debe de retonar un objeto', () => { 

        // 1.- Incializacion
        const userTest = {
                    uid: 'ABC123',
                    username: 'Mutuelo'
        } 

        //2.- Estimulo
        const user = getUser();
        


        //3.- Observar el comportamiento
        expect( user ).toEqual( userTest );

    });


    test( 'getUsuarioActivo Debe de retonar un objeto del usuario activo', () => { 

        

        // 1.- Incializacion
        const nombre = 'Jesus';
        const userTesting = {
                uid: 'ABC567',
                username: nombre
        } 

        //2.- Estimulo
        const user = getUsuarioActivo( nombre );
        


        //3.- Observar el comportamiento
        expect( user ).toEqual( userTesting );

    });



} );


