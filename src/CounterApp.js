import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value  }  ) => {


    const [ counter, SetCounter ] = useState( value );

    const handleAdd = () => {
        SetCounter( counter + 1 );
    }

    const handleSub = () => {
        SetCounter( counter - 1 );
    }

    const handleReset = () => {
        SetCounter( value );
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

                <div className="col-full-12">
                    <button onClick={  handleReset  } > Reset </button>
                </div>

                <div className="col-full-12">
                    <button onClick={  handleSub  } > -1 </button>
                </div>
    
            </div>
        </section>
    );
    
}

CounterApp.propTypes = { 
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 10
}

export default CounterApp;
