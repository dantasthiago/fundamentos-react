const Botoes = (props) => {
	return (
		<div>
			<button onClick={props.setInc}>
				<strong>+</strong>
			</button>
			<button onClick={props.setDec}>
				<strong>-</strong>
			</button>
		</div>
	);
};

export default Botoes;
