import React from 'react';

const PrimeraApp = () => {

    const saludo = 'Hola mundo desde react';

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


export default PrimeraApp;