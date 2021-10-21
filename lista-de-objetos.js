// DESAFIO - LISTAS DE DEPENDENTES

// Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente.

const cliente = {
    nome: 'André',
    idade: 36,
    cpf:'12543652266',
    email: 'andre@email.com',
    fones:[ '55912345498', '5521988743124' ],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNasc: '20/03/2011'
    }]

}

// por maior que o objeto seja, ele ainda é 1 índice só do array

// para adicionar um dado no array sem se importar com a posição, pode-se utilizar o método push,
// que sempre vai adicionar o que for passado no parâmetro no último índice do array

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

//console.log(cliente)

// se quiser trazer só a informação da dependente mais nova:

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova[0].nome)

// Entra no objeto 'cliente', entra na chave 'dependentes' e através do método filter, 
// pede para que cada dependente que o filtro percorre acesse a chave de cada um dos objetos
// Cada índice da array é o seu próprio objeto e o filter consegue acessar esse objeto através da notação de ponto(dependente.dataNasc)
// ele acessa a chave 'data de nascimento' de cada um dos índices da array e comparar se o valor da string é "04/01/2014" ele retorna o dado.