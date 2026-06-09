//Criando arrays
let usuarios = [10 , "Carlos" , "Maria"]
console.log(usuarios)

//Acessando Itens
console.log(usuarios[1])

//Adicionando item no final da arrays
//push()
usuarios.push("Pedro");
console.log(usuarios);

//Remove o último item 
//pop()
usuarios.pop()
console.log(usuarios)

//Remove o primeiro item
//shift()
usuarios.shift()
console.log(usuarios)

//mostra a quantidade de itens
//length()

console.log(usuarios.length)

//Verifica se um item existe
//includes()

console.log(usuarios.includes("Maria"))

//Mostra a posição do item
//indexOf()
console.log(usuarios.indexOf("Maria"))

//Remove ou adciona itens
//splice()

usuarios.splice(0 , 1)
console.log(usuarios)

//Copia parte do array
//slice

//sintaxe:
//array.slice(inicio, fim)

usuarios2 = [10 , "Carlos" , "Maria", "Pedro", "Joao"]

let novoArrays = usuarios2.slice(0 , 2)
console.log(novoArrays)

//Inverter Ordem
//reverse()

usuarios2.reverse()
console.log(usuarios2)

//Ordena em ordem alfabética
//sort()

usuarios2.sort()
console.log(usuarios2)

//ForEach()
//Percorre o array

usuarios.forEach(function(usuario){
    console.log(usuario)
})

/*
    usuarios -> arrays
    forEach -> percorrer todos elementos
    function(usuario) -> função de callback, que é executada para cada elemento do array. O parâmetro "usuario" representa o elemento atual sendo processado.
    usuario -> variavel temporaria que recebe cada valor do array a cada iteração do forEach.
*/

//for OF
// OUTRA FORMA DE PERCORRER
// O for...of percorre os valores do array e ignora os indices e pega apenas os valores:

for (let usuario of usuarios2) {
    console.log(usuario)
}

//FOR IN
// O for...in percorre os indices do array e ignora os valores, ou seja, pega apenas os indices:
for (let indice in usuarios2) {
    console.log(indice)
    console.log(usuarios2[indice])
}

// FOR TRADICIONAL
// O for tradicional é uma estrutura de repetição que permite percorrer um array utilizando um contador. Ele é mais flexível, pois 
// permite controlar o início, a condição de parada e o incremento do contador. No entanto, ele é mais verboso e propenso a 
// erros, como esquecer de incrementar o contador ou definir a condição de parada corretamente.

for (let i = 0; i < usuarios2.length; i++) {
    console.log(i)
    console.log(usuarios2[i])
}

// join()
// O método join() é utilizado para concatenar os elementos de um array em uma única string, separando-os por um delimitador especificado.
// A sintaxe do join() é a seguinte: array.join(separador), onde "separador" é o caractere ou string que será usado para separar os elementos
//  na string resultante. Se nenhum separador for especificado, os elementos serão separados por vírgulas por padrão.

let nomes = usuarios2.join(" - ")
console.log(nomes)

// concat()
// O método concat() é utilizado para mesclar dois ou mais arrays em um novo array. Ele não modifica os arrays
//  originais, mas retorna um novo array que contém os elementos de todos os arrays concatenados.
// A sintaxe do concat() é a seguinte: array1.concat(array2, array3, ...), onde "array1", "array2", "array3", etc. são os arrays que você deseja concatenar.

let numeros1 = [1, 2, 3]
let numeros2 = [4, 5, 6]
let numerosConcatenados = numeros1.concat(numeros2)
console.log(numerosConcatenados)
