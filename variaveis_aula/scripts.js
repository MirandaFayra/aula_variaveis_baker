console.log('Olá Bakerrrr!')

//---------- EXERCICIO 1 -------------

// Comentário de Linha 
/* Comentário de Bloco */

/*const nome = 'Thai123' // string
let idade = 20  // number
let presenca = false // boolean
*/

// IMPRIMINDO O VALOR 
/*console.log(nome) 
console.log(idade)
console.log(presenca)
*/

//typeof => verificar o tipo do dado
// IMPRIMINDO O TIPO
/*
console.log(typeof nome) 
console.log(typeof idade)
console.log(typeof presenca)
*/ 

//---------- EXERCICIO 2 -------------
// Number () => Converter o dado para numero 
// Confirm => Okay = true | Cancelar = False 

let nome = prompt('Digite o seu nome')
let idade = Number(prompt('Digite a sua idade'))
let presenca = confirm('Veio (okay) ou não veio (cancelar)')

/*console.log(nome)
console.log(idade)
console.log(presenca)

console.log(typeof nome) 
console.log(typeof idade)
console.log(typeof presenca)*/

//---------- EXERCICIO 3 -------------

// Imprimir tudo de uma vez só os dados 
console.log( nome , idade , presenca )

// Imprimir tudo de uma vez adicionando palavras
console.log('Estudante'+ ' ' + nome +  ' '+'tem' +' ' + idade + ' '+'anos. Presença :' +' ' + presenca )

//Imprimir tudo de uma vez com Template string => juntar variável com a string
console.log(`Estudante ${nome} tem ${idade} anos . Presença : ${presenca}`)

let tipoDoNome = typeof nome
let tipoDaIdade = typeof idade
let tipoDaPresenca = typeof presenca

// Imprimindo o tipo dos dados com mensagem 

console.log('Nome:'+ ' ' + tipoDoNome, + ' ' + 'idade:'+ ' '+ tipoDaIdade + ' ' + 'presença:' + tipoDaPresenca)

console.log(`Nome : ${tipoDoNome}, idade: ${tipoDaIdade}, presença: ${tipoDaPresenca}`)
