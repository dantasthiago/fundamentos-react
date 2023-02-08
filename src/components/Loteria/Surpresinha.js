function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);

  return array.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, array)
    : aleatorio
}

function gerarNumeros(qtd){
  const numeros = Array(qtd).fill(0).reduce((nums) => {
    const novoNumero = gerarNumeroNaoContido(1, 25, nums)
    return [...nums, novoNumero]
  }, []).sort((n1, n2) => n1 -n2)

  return numeros

}

console.log(gerarNumeros(15));

//funcao minha
// function Lotofacil(min, max) {
// 	return Math.floor(Math.random() * (max - min) + 1) + min;
// }

// let surpresinha = [];
// for (let i = 0; i < 15; i++) {
// 	surpresinha.push(Lotofacil(1, 25));
// }

// console.log(surpresinha);
