const Filho = (props) => {

  return(
    <div>
      <span>{props.nome} </span>
      <span><strong>{props.idade} </strong> </span>
      <span>{props.casado ? 'Casado' : 'Solteiro'}</span>

    </div>
  )

}

export default Filho;
