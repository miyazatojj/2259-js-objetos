// DESAFIO - LISTA DE DEPENDENTES

// Extrair de uma listagem de clientes apenas as informações de dependentes 
// e montar uma lista única, para análise de outros departamentos do banco.

/* const clientes = [
    {
        nome: 'André',
        idade: 36,
        cpf:'12312312312',
        dependentes: [{
              nome: 'Sara Silva',
              parentesco: 'filha',
              dataNasc: '20/03/2011' 
            },
            {
              nome:"Samia Maria",
              parentesco:"filha",
              dataNasc:"04/01/2014"
            }],
        },
        {
            nome: "Juliana",
            cpf: "56767867867",
            dependentes: [{
                nome: "Sophia",
                parentesco: "filha",
                dataNasc: "30/08/200"
            }],
        }
    ]

    const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes] // spread operator

    // console.log(listaDependentes)

    console.table(listaDependentes) */

// spread operator -> operador de espalhamento
// Todos os dependentes dos objetos agora são parte de um único array.
// Linha 33 -> abrimos um array e dentro dele, espalhamos o primeiro índice da array, que é o objeto André, 
// acessou a chave dependentes, pegou todos os itens do array e e espalhou dentro do array criado (listaDependentes)
// em seguida, fez a mesma coisa com o índice 1 da array cliente, que é o objeto 'Juliana'

const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   //const guerreiro = { fichaGuerreiro, equipoGuerreiro }

   //console.log(guerreiro)

   const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }

   console.log(guerreiro)