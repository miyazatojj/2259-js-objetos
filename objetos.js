// OBJETOS 

// No JavaScript, objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real.
// Todo objeto no JS é formado pelo par/cadeia: chave e valor, diferente de um array onde tem os elementos que dá para acessar pelo índice.

//const listaCPFs = ["12365242625", "9242624265", "9352524652"]

// const cliente = ["nome", "André", "idade", 36]

/* const cliente = {
    nome:"André",
    idade:36,
    cpf: "12543652266",
    email:"andre@email.com"
} */

const pessoa = {
    nome:"Peter Parker",
    idade: 20,
    cpf: "12345678901",
    email:"parker@email.com"
}

console.log(pessoa.idade)
console.log(pessoa.cpf.substring(0,3))