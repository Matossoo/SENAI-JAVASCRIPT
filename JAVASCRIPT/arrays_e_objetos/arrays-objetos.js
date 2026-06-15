let usuario = {
    nome: "Fulano",
    idade: 30,
    cidade: "Joinville"
}

console.log(usuario)

console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.cidade)

usuario.email = "fulano@gmail.com"
console.log(usuario)

delete usuario.cidade
console.log(usuario)

let usuarios = [
    {
        id: 1,
        nome: "Carlos",
        idade: 25
    },
    {
        id: 2,
        nome: "Maria",
        idade: 28
    },
    {
        id: 3,
        nome: "Ana",
        idade: 22
    }
]

console.log(usuarios)
console.log(usuarios[2])

console.log(usuarios[2].nome)

for(let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome)
}

usuarios.push(
    {
    id: 4,
    nome: "João",
    idade: 35
    }
)

console.log(usuarios)

usuarios.pop()
console.log(usuarios)

for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].id === 2) {
        console.log("usuario encontrado: " + usuarios[i])
    }
}