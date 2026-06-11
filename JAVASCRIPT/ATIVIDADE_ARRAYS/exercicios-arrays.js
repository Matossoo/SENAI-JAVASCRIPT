// =========================
// 1. Cadastro de Participantes de Evento
// =========================

let participantes = ["Marcos", "Fernanda", "Juliana"];

// 1
console.log("Participantes:", participantes);

// 2
participantes.push("Gabriel");

// 3
participantes.unshift("Patrícia");

// 4
console.log("Quantidade:", participantes.length);

// 5
console.log("Juliana está inscrita?", participantes.includes("Juliana"));

// 6
console.log("Carlos está inscrito?", participantes.includes("Carlos"));

// 7
console.log("Posição de Fernanda:", participantes.indexOf("Fernanda"));

// 8
participantes.pop();

// 9
console.log("Lista atualizada:", participantes);

// 10
console.log(participantes.join(" | "));


// =========================
// 2. Controle de Pedidos
// =========================

let pedidos = ["Hambúrguer", "Batata Frita", "Refrigerante"];

// 1
pedidos.push("Milk Shake");

// 2
pedidos.shift();

// 3
console.log("Quantidade de pedidos:", pedidos.length);

// 4
for (let pedido of pedidos) {
    console.log(pedido);
}

// 5
for (let indice in pedidos) {
    console.log(indice);
}


// =========================
// 3. Lista de Linguagens de Programação
// =========================

let linguagens = ["Java", "Python", "JavaScript", "C#"];

// 1
linguagens.sort();
console.log("Ordenado:", linguagens);

// 2
linguagens.reverse();
console.log("Invertido:", linguagens);

// 3
let copia = linguagens.slice(0, 3);

// 4
console.log("Array copiado:", copia);

// 5
console.log("Array original:", linguagens);


// =========================
// 4. Sistema de Equipes
// =========================

let equipeFrontend = ["Lucas", "Ana"];
let equipeBackend = ["Carlos", "Fernanda"];

// 1
let equipeCompleta = equipeFrontend.concat(equipeBackend);

// 2
console.log("Equipe completa:", equipeCompleta);

// 3
console.log("Quantidade de colaboradores:", equipeCompleta.length);

// 4
equipeCompleta.forEach(function(colaborador) {
    console.log(colaborador);
});


// =========================
// 5. Mini Sistema de Biblioteca
// =========================

let livros = ["Dom Casmurro", "O Pequeno Príncipe", "1984", "Harry Potter"];

// 1
console.log("Livros:", livros);

// 2
console.log("Existe o livro 1984?", livros.includes("1984"));

// 3
console.log("Posição de Harry Potter:", livros.indexOf("Harry Potter"));

// 4
livros.shift();

// 5
livros.push("Senhor dos Anéis");

// 6
livros.sort();

// 7
for (let i = 0; i < livros.length; i++) {
    console.log(livros[i]);
}

// 8
console.log("Quantidade total de livros:", livros.length);