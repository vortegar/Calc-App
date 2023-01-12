import React from 'react';

import '../styles/button.css';


export const Boton = ({ children, numberBoton }) => {

  const esOperador = ( value ) => {
    return isNaN( value ) && ( value !== '.' ) && ( value !== '=' )
  };
  
  const handleAddValue =  () => {
    numberBoton(children)
  };

  return (
    <div
      className={ `boton-contenedor ${esOperador( children ) ? 'operador' : ''  }`.trimEnd() }
      onClick={ handleAddValue }
    > { children }</div>
  )
}
