function soma(a, b) {
    return a + b;
}

let resultado = soma(5, 6);
console.log(resultado);

function saudacao(nome) {
    console.log("Bem-vindo ao sistema");
}

saudacao();

const multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(6, 7));

const dobrar = numero => numero * 2;

console.log(dobrar(10));

const verificarIdade = idade => {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
}

console.log(verificarIdade(12));