// DESAFIO - CLIENTE POUPANÇA

// Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança.

function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo = saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const ju = new clientePoupanca("Ju", "55588844477711", "ju@email.com", 100, 200)

console.log(ju)

// Função para depositar na poupança

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30)
console.log(ju.saldoPoup)

// Linha 26 -> Pedimos para o JS acessar o objeto clientePoupanca, entrar na propriedade prototype e adicionar um novo método, que é uma função
// 