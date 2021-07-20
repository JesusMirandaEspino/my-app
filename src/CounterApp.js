import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value  }  ) => {


    const [ counter, SetCounter ] = useState( 0 );

    const handleAdd = () => {
        SetCounter( counter + 1 )
    }



   // const saludo = 'Hola mundo desde react';

    return (
        <section className="fila">  
            <div className="contenedor1">

                <div className="col-full-12">
                    <h1> CounterApp </h1>
                    <h2>{ value }</h2>
                </div>

                <div className="col-full-12">
                    <h2>{ counter }</h2>
                </div>

                <div className="col-full-12">
                    <button onClick={  handleAdd  } > +1 </button>
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
