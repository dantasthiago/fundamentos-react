import './Input.css'
import { useState } from 'react';

const Formulario= () =>{

  const [valor, setValor] = useState('Inicial');

  function aoMudar(e) {
    setValor(e.target.value)
  }

  return(

  <div className='Input'>
    <h2>{valor}</h2>
    <input value={valor} onChange={aoMudar}/>
    <input value={valor} readOnly/>
  </div>
  )

}

export default Formulario;