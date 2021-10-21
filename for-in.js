// DESAFIO - PUXANDO RELATÓRIO

// Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.

const cliente = {
    nome: 'André',
    idade: 36,
    cpf:'12543652266',
    email: 'andre@email.com',
    fones:[ '55912345498', '5521988743124' ],
    dependentes: [
       {
          nome: 'Sara Silva',
          parentesco: 'filha',
          dataNasc: '20/03/2011' },
       {
          nome:"Samia Maria",
          parentesco:"filha",
          dataNasc:"04/01/2014"
        }
    ],
    saldo:100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

let relatorio = ""; 

for ( let info in cliente ){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else {
        relatorio += `
        ${info} ===> ${cliente[info]}
        `
    }
}

console.log(relatorio)

// Método for in -> pode ser utilizado para percorrer um objeto sem precisar dos índices do array e sem precisar fazer cliente.nome, cliente.idade, cliente.cpf, etc.
// Let relatorio = "" -> começa criando a variável relatório que a princípio recebe uma string vazia só para inicializá-la
// Para cada info (dado) de um cliente, pedimos para o JavaScript incluir dentro da string relatório uma info, essa info se refere ao nome da chave, de cada uma das propriedades do objeto
// Temos que identificar dentro objeto o que é um objeto, o que que está dentro dele, e o que que é um array para não printarmos essas informações no nosso relatório
// Precisamos verificar dois tipos, se é object ou se é function