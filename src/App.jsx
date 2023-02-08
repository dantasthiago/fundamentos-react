import "./App.css";


import Contador from './components/Contador/Contador';
import Formulario from './components/formulario/Input';
import IndiretaPai from "./components/Comunicacao/IndiretaPai";
import DiretaPai from "./components/Comunicacao/DiretaPai";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import ListaProdutos from "./components/Repeticao/ListaProdutos";
import ListaAlunos from "./components/Repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Desafios/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import Loto from './components/Loteria/Loto';

const App = () => (
	<div className='App'>
		<h1>Fundamentos do React!</h1>
		<div className='Cards'>
			<Card titulo='#14 - Números Vencedores' color='#633974'>
			<Loto qtd={15}/>
			</Card>
			<Card titulo='#13 - Contador' color='#D32F2F'>
				<Contador />
			</Card>
			<Card titulo='#12 - Component Controlado' color='#1A5276'>
				<Formulario/>
			</Card>
			<Card titulo='#11 - Comunicação Indireta' color='#717D7E'>
				<IndiretaPai />
			</Card>
			<Card titulo='#10 - Comunicação Direta' color='#186A3B'>
				<DiretaPai />
			</Card>
			<Card titulo='#09 - Condicinal #2' color='#0B5345'>
				<UsuarioInfo usuario={{ nome: "Thiago" }} />
				{/* <UsuarioInfo  usuario={{nome:''}}/>
				<UsuarioInfo  usuario={{email:''}}/>
				<UsuarioInfo  usuario={{nome:'Aline'}}/>
				<UsuarioInfo  /> */}
			</Card>
			<Card titulo='#08 - Condicional' color='#8E24AA'>
				<ParOuImpar numero={1} />
			</Card>

			<Card titulo='#07 - Desafio Repetição' color='#D32F2F'>
				<ListaProdutos />
			</Card>
			<Card titulo='#06 - Repetição' color='#FFC300'>
				<ListaAlunos />
			</Card>
			<Card titulo='#05 - Componente com filhos' color='#C4B454'>
				<Familia sobrenome='Dantas'>
					<FamiliaMembro nome='Thiago' />
					<FamiliaMembro nome='Aline' />
					<FamiliaMembro nome='Coraline' />
				</Familia>
			</Card>
			<Card titulo='#04 - Desafio Aleatório' color='#00FFFF'>
				<Aleatorio max={25} min={1} />
				{/* <Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} />
				<Aleatorio max={25} min={1} /> */}
			</Card>
			<Card titulo='#03 - Fragmento' color='#088F8F'>
				<Fragmento />
			</Card>
			<Card titulo='#02 - Com parâmetro' color='#DFFF00'>
				<ComParametro
					titulo='Situação do Aluno'
					aluno='Thiago Dantas'
					nota={9.3}
				/>
			</Card>
			<Card titulo='#01 - Primeiro' color='#0FFF50'>
				<Primeiro />
			</Card>
		</div>
	</div>
);
export default App;
