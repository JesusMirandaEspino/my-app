import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value  }  ) => {

   // const saludo = 'Hola mundo desde react';

    return (
        <section className="fila">  
            <div className="contenedor1">
                <div className="col-full-12">
                    <h1> CounterApp </h1>
                    <h2>{ value }</h2>
                </div>
            </div>
        </section>
    );
    
}

CounterApp.propTypes = { 
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 1234
}

export default CounterApp;
