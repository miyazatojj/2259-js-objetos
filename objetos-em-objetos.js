// DESAFIO - COMPONDO UM OBJETO

// Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones:["55912345498", "5521988743124"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

// Fazendo alteração dentro da propriedade 'cliente':

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)