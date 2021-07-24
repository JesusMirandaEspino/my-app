import '@testing-library/jest-dom';




import { getHeroeById, getHeroesByOwner } from '../base/08-imp-exp';
import  {  getHeroeByIdAsync } from '../base/09-promesas';
import  heroes  from '../data/heroes';


describe( 'Pruebas con funciones asincronas', ( done ) => { 


        test( 'Debe de retornar un heroe async', () => {    
    
            const id = 1;

            getHeroeByIdAsync(id)
                .then( heroe => {
                    expect( heroe ).toBe( heroes[0] );
                    done();
                } );
                
    });


    test( 'Se verifica si el id es de un  heroe que existe', (  ) => {

        jest.setTimeout(10000);

        const id = 10;

        getHeroeByIdAsync(id)
            .catch( err => {
                expect( err ).toBe('No se pudo encontrar el héroe');
                
            } );



    } );



    


} );


