import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo }  ) => {

   // const saludo = 'Hola mundo desde react';

    return (
        <section className="fila">  
            <div className="contenedor1">
                <div className="col-full-12">
                    <h1> { saludo } </h1>
                </div>
            </div>
        </section>
    );
    
}

PrimeraApp.propTypes = { 
    saludo: PropTypes.string
}

export default PrimeraApp;