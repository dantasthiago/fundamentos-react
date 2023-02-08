import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
	const [nome, setNome] = useState("?");
	const [idade, setIdade] = useState(0);
	const [casado, setCasado] = useState(false);

	// nome idade casado
	function fornecerInformacoes(nome, idade, casado) {
		setNome(nome);
		setIdade(idade);
		setCasado(casado) 

	}

	return (
		<div>
			<div>
				<span>{nome} </span>
				<span>
					<strong>{idade} </strong>
				</span>
				<span>{casado ? 'Casado' : 'Solteiro'}</span>
			</div>
			<IndiretaFilho aoClicar={fornecerInformacoes} />
		</div>
	);
};

export default IndiretaPai;
