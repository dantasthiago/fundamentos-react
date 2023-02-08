const IndiretaFilho = (props) => {
	const callback = props.aoClicar;
	return (
		<div>
			<div>Filho</div>
			<button
				onClick={(e) => {
					callback("Thiago", 34, true);
				}}
			>
				Fornecer Informações
			</button>
		</div>
	);
};

export default IndiretaFilho;
