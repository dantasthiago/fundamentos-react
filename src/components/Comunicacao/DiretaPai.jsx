import DiretaFilho from './DiretaFilho'

const Pai = () => {
  return(
    <div>
      <DiretaFilho nome='Samir' idade={35} casado={true}/>
      <DiretaFilho nome='Coraline' idade={6} casado={false}/>
    </div>
  )
}

export default Pai;