// DESAFIO - LISTA DE TELEFONES

// Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la,
// verificando se há mais de um número em algum cadastro.


const cliente = {
    nome:"André",
    idade:36,
    cpf:"12543652266",
    email:"andre@email.com",
    fones:["55912345498", "5521988743124"]
}

cliente.fones.forEach(fone => console.log(fone))