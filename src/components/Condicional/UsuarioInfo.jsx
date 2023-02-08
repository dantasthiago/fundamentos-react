import If, { Else } from "./If";

const UsuarioInfo = (props) => {
	const usuario = props.usuario || {};

	return (
		<div>
			<If test={usuario && usuario.nome}>
				Seja bem vindo <strong>{usuario.nome} </strong>!
			</If>
			<Else>
				Seja bem vindo <strong>Amigão </strong>!
			</Else>
		</div>
	);
};

export default UsuarioInfo;
