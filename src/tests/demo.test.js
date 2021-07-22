describe( 'Pruebas en el archivo demo test.js', () => { 


    test( 'Primera Prueba valores deben ser iguales', () => { 

        // 1.- Incializacion
        const mensaje = 'Hola mundo';

        //2.- Estimulo
        const mensaje2 = `Hola mundo`;

        //3.- Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );

    });






} );


