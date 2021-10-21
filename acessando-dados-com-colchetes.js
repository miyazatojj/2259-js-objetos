// DESAFIO - ACESSAR CHAVES

// Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema 
// e printar o resultado na tela

const cliente = {
    nome:"André",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))