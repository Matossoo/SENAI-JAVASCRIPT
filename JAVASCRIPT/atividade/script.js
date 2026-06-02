// 1. Dobro de um Número
const dobro = (numero) => {
    return numero * 2;
};

console.log(dobro(5));


// 2. Média de Notas
const media = (nota1, nota2) => {
    let mediaFinal = (nota1 + nota2) / 2;

    if (mediaFinal >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
};

console.log(media(8, 6));


// 3. Maior Número
const maiorNumero = (n1, n2) => {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
};

console.log(maiorNumero(8, 20));


// 4. Converter Temperatura
const converterTemperatura = (celsius) => {
    return (celsius * 9/5) + 32;
};

console.log(converterTemperatura(30));


// 5. Verificar Login
const login = (usuario, senha) => {
    if (usuario === "admin" && senha === "1234") {
        return "Login realizado";
    } else {
        return "Usuário ou senha incorretos";
    }
};

console.log(login("admin", "1234"));