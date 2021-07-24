// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import  heroes  from '../data/heroes';

// visualizar en consola console.log( owners );




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// visualizar en consola console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// visualizar en consola console.log( getHeroesByOwner('Marvel') );


