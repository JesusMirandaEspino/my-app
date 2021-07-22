


const nombre   = 'Jesus';
const apellido = 'Miranda';


// mensaje mensaje  const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//  mensaje console.log( nombreCompleto );


export function getSaludo(nombre = 'Mutuelo') {
    return 'Hola ' + nombre;
}

// mensaje mensaje console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );