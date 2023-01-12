import { useState } from 'react';

import { Boton, BotonClear, Pantalla  } from './components';
import { evaluate } from 'mathjs';

import './CalculadoraApp.css';


export const CalculadoraApp = ({amount}) => {

  const [ value, setValue ] = useState(amount)


  const addValue = ( newValue ) => {
    setValue( value + newValue );
  };

  const resetValue = () => {
    setValue( amount );
  };

  const resultMath = () => {
    value 
      ? setValue(evaluate(value))
      : alert('Por favor ingresa un número')
  }



  return (
    <>
        <div className="App">
            <div className='contenedor-calculadora'>
              <Pantalla input={ value }/>

              <div className='fila'>
                <Boton numberBoton= { addValue } >1</Boton> 
                <Boton numberBoton= { addValue } >2</Boton> 
                <Boton numberBoton= { addValue } >3</Boton> 
                <Boton numberBoton= { addValue } >+</Boton> 
              </div>
              <div className='fila'>
                <Boton numberBoton= { addValue } >4</Boton> 
                <Boton numberBoton= { addValue } >5</Boton> 
                <Boton numberBoton= { addValue } >6</Boton> 
                <Boton numberBoton= { addValue } >-</Boton>
              </div>
              <div className='fila'>
                <Boton numberBoton= { addValue } >7</Boton> 
                <Boton numberBoton= { addValue } >8</Boton> 
                <Boton numberBoton= { addValue } >9</Boton> 
                <Boton numberBoton= { addValue } >*</Boton>
              </div>
              <div className='fila'>
                <Boton numberBoton= { resultMath } >=</Boton> 
                <Boton numberBoton= { addValue } >0</Boton> 
                <Boton numberBoton= { addValue } >.</Boton> 
                <Boton numberBoton= { addValue } >/</Boton>
              </div>
              <div className='fila'>
                <BotonClear clearBoton={ resetValue } children='Clear' />
              </div>
          </div>
        </div>
    </>
  )
}
