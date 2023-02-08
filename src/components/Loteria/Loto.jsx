import "./Loto.css";

import { useState } from "react";

const Loto = (props) => {
	function gerarNumeroNaoContido(min, max, array) {
		const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);

		return array.includes(aleatorio)
			? gerarNumeroNaoContido(min, max, array)
			: aleatorio;
	}

	function gerarNumeros(qtd) {
		const numeros = Array(qtd)
			.fill(0)
			.reduce((nums) => {
				const novoNumero = gerarNumeroNaoContido(1, 25, nums);
				return [...nums, novoNumero];
			}, [])
			.sort((n1, n2) => n1 - n2);

		return numeros;
	}
	const [qtd, setQtd] = useState(props.qtd || 15);
	const numerosIniciais = Array(qtd).fill(0);
	const [numeros, setNumeros] = useState(numerosIniciais);

	return (
		<div className='loto'>
			<h2>Loto</h2>
			<h3>{numeros.join("-")}</h3>
			<div>
				<label>Quantidade de Números:</label>
				<input
					min='6'
					max='15'
					type='number'
					value={qtd}
					onChange={(e) => {
						setQtd(+e.target.value)
						setNumeros(gerarNumeros(+e.target.value));
					}}
				/>
			</div>
			<button onClick={(_) => setNumeros(gerarNumeros(qtd))}>
				Gerar Números
			</button>
		</div>
	);
};

export default Loto;
