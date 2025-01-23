

const taskInput = document.getElementById('caixa');
const botao = document.getElementById('button');
const lista = document.getElementById('lista');
let tarefas = [];

window.onload = () => {
    const tarefasSalvas = localStorage.getItem('tarefas'); // pega as tarefas salvas 
    if(tarefasSalvas){
        tarefas = JSON.parse(tarefasSalvas); // converte o JSON para array e coloca no array tarefas
        atualizarLista();
    }
}

function clicar(){
    const newTarefas = taskInput.value;
    if(taskInput.value.length === 0){
        window.alert('Digite algo na lista!')
    } else if(tarefas.includes(newTarefas)){
        window.alert('Essa atividade já esta na lista!')
        taskInput.value = '';
    }else{
        tarefas.push(taskInput.value);
        atualizarLista();
        taskInput.value = '';
        salvarTarefa();
    }
}

function atualizarLista(){
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) =>{ //percorre o array e pega as tarefas
        const li =document.createElement('li'); // cria o elemento li
        li.textContent = tarefa; // adiciona as tarefas ao esse element

        const excluir = document.createElement('button');
        excluir.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>'
        excluir.id = 'btn';
        excluir.addEventListener('click', () => {
            tarefas.splice(index, 1); // exclui a tarefa
            atualizarLista();
            salvarTarefa();
        })

        li.appendChild(excluir); //adiciona o botao a tarefa
        lista.appendChild(li); // aparece as tarefas na tela
    });
}

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        clicar();
    }
});

function salvarTarefa(){
    localStorage.setItem('tarefas' , JSON.stringify(tarefas)); // converte o array para string e salva as tarefas
}