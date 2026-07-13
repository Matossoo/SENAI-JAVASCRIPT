async function ListarCurso(){
    const resposta = await fetch('http://localhost:3023/cursos');
    const cursos = await resposta.json();

    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    
    cursos.forEach(curso => {
        lista.innerHTML += `
        
        <li> 
        ${curso.id} - ${curso.nome}
            <button onclick="editarCurso(${curso.id})", '${curso.nome}')"> Editar</button>
            <button onclick="excluirCurso(${curso.id})">Excluir</button>
        </li>
        `
    


    });
}

async function CadastrarCurso() {
    const nome = document.getElementById('nome').value;

    if(nome === '') {
     alert('Por favor, preencha o nome do curso.');
     return;
    }

    const resposta = await fetch('http://localhost:3023/cursos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ nome })

    })

    const dados = await resposta.json();
    alert(dados.mensagem);

    document.getElementById('nome').value = '';
    ListarCurso();
}

async function editarCurso() {

    listarCurso();

}

async function excluirCurso(id) {
    if(!confirm('Deseja realmente excluir este curso?')) return;
    
    await fetch(`http://localhost:3023/cursos/${id}`, {
        method: 'DELETE'
    })

    ListarCurso();
}