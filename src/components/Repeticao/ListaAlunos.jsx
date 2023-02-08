import alunos from "../../data/alunos";

const ListaAluno = (props) => {


	const alunosLista = alunos.map((aluno) => {
		return (
      <li key={aluno.id}>
        {aluno.nome} {aluno.nota}
      </li>
     
      
		);
	});

	return (
		<div>
			<ol>{alunosLista}</ol>
		</div>
	);
};
export default ListaAluno;
