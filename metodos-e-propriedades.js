// DESAFIO - CLIENTE POUPANÇA

// Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança.

class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo    
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo) //no super, passar quais as propriedades que queremos herdar
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca("Andre","a@email.com","2255887744",100,200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)