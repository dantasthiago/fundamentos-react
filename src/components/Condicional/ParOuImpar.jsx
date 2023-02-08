const ParOuImpar = (props) => {
	const ehPar = props.numero % 2 === 0;

	return <div>
          {ehPar ? 
          <span>Par</span> : 
          <span>Ímpar</span>
          }
        </div>;
};

export default ParOuImpar;
