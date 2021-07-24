import '@testing-library/jest-dom';


import { getImagen } from '../base/11-async-await';


describe( 'Pruebas cons async y await con fetch', () => { 

    test( ' Debe de retornar una url de la imagen', async () => {

    const getUrl = await getImagen();

        expect( getUrl.includes('https://') ).toBe( true );

});


} );


