const Aleatorio = (props) => {
	const { min, max } = props;

	// outra forma de destructuring===>// const max = props.max; // const min = props.min;

	const numeroAleatorio = Math.random() * (max - min) + min;
	const numeroAleatorioArredondado = Math.ceil(numeroAleatorio);

	return (
		<div>
			O numero aleatório é <strong>{numeroAleatorioArredondado}</strong>
		</div>
	);
};

export default Aleatorio;
