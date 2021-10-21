// DESAFIO - PRINTAR INFOS

// Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
    nome:"André",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com"
}

//console.log(cliente.nome) 
// Notação de Ponto -> acessou a variável cliente e através da notação de ponto conseguiu entrar na chave 'nome' e exibir o valor dessa chave (string com valor André)

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`) 
console.log(cliente.cpf.substring(0,3)) // para mostrar somente os 3 primeiros números do cpf