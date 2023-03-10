import './ListaProdutos.css'
import produtos from "../../data/produtos";

const ListaProdutos = (props) => {

	function getLinhas() {
		return produtos.map((produto, i) => {
			return (
				<tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
					<td>{produto.id}</td>
					<td>{produto.nome}</td>
					<td>R${produto.preco}</td>
				</tr>
			);
		});
	}

	return (
		<div className='ListaProdutos'>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Preço</th>
					</tr>
				</thead>
				<tbody>
          {getLinhas()}
				</tbody>
			</table>
		</div>
	);
};

export default ListaProdutos;
