import '../styles/botonclear.css'
export const BotonClear = ({ children, clearBoton }) => {

  const handleReset =  () => {
    clearBoton()
  };

  return (
    <div
      onClick={ handleReset }
      className="boton-clear">
        { children }
    </div>
  )
}
