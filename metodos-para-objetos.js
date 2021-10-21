// DESAFIO - OFERTA DE SEGURO

// Percorrer um objeto, verificar se existe a chave 'dependentes' e, caso exista, 
// enviar uma mensagem de oferta de seguro.

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

//console.log(propsClientes)

// Método Object.keys -> cria um array com todas as chaves do objeto (cliente)

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)

// Includes -> método de array do JS que verifica se o array que estamos trabalhando,
// (propsClientes) inclui determinado dado ("dependentes"), se existe na array ou não.
// propsClientes é um array com várias strings e cada string refere a uma chave do objeto.
// O método Includes sempre retorna true ou false

// Linha 36 -> 1º com o Object.keys, pedimos para o JS extrair do objeto uma lista de chaves, de propriedades deste objeto
// Salvou dentro da const propsClientes e em seguida fizemos uma verificação para ver se inclui a chave que queremos ("dependentes")
// Se o objeto (cliente) tinha dependentes, é exibida uma mensagem direcionada ao cliente (nome)

// Além o Object.keys, o JS também tem o correspondente dele
// Se trabalhamos com Object.keys para pegar as chaves, podemos também pensar que existe um
// Object.keys para pegar Object.values, para pegar os valores de um objeto (cliente)

// Object.values -> ao invés de um array com as chaves, ele traz um array com os valores 
// Lembrando que o JS permite que os arrays tenham dados variados (com string, números, objetos, função...)

// Object.entries -> traz um array com vários arrays dentro dele, cada um sendo um conjunto de chaves e valores, só que agora em outra estrutura,
// uma estrutura de array. O índice 0 se refere a chave e o índice 1 se refere ao valor e isso sempre se repetindo.