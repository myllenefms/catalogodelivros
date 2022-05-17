//comentario em linha
/**declaração de variáveis
 * 
 * var - mais ampla - fica no escopo global ou da função independente do escopo do bloco
 * 
 * let - menos ampla - limita mais o escopo dentro do bloco, instrução ou expressão
 * const - constante - tem que receber o valor na declaração
 * 
 * linguagem fracamente tipada e dinâmica
 * 
 * number, string, bool, array, object
 * 
 * entre '' -> string
 * entre `` com ${} para interpolar número no print
 */

var nums = [1, 2, 3, 4, 5,]
var texts = ["Myllene", `Meu array de número é ${nums}`]

var obj = {
    nome: 'Myllene',
    idade: 21,
    cidade: 'Recife',
    prof: 'Dev'
}

let avanade = [{
    nome: 'Francyelle',
    idade: 21,
    cidade: 'Paudalho',
},
{
    nome: 'Amélia',
    idade: 40,
    cidade: 'Carpina'
},
{
    nome: 'Manuelly',
    idade: 14,
    cidade: 'Paudalho'
}]

console.log(avanade[2])


/**declaração de funções
 * 
 * 
 */
let a = Math.floor(Math.random()*10)
function primeiraFuncao(){
    console.log('Hello, World!')
    let b = Math.floor(Math.random()*10)//arredonda o número(sorteia o numero)
    if (a>b){
        return `${a} - ${b} = ${a-b}`
    } else {
        return `${a} + ${b} = ${a+b}`
    }
}

console.log(primeiraFuncao())