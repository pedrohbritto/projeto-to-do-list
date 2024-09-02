const localStoragekey = 'to-do-list'
function validateIfexistsclicar(){
    var values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    var caixaValue = document.getElementById('caixa').value
    var exits= values.find(x => x.name == caixaValue)
    return !exits ? false : true
}



function clicar(){
   var caixa = document.getElementById('caixa')
   if(!caixa.value){
    alert('Digite algo para inserir em sua lista!')
   } else if(validateIfexistsclicar()){
    alert('Já existe uma task com essa descrição')
   }
   else{
     var values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
     values.push({
        name: caixa.value
     })
     localStorage.setItem(localStoragekey, JSON.stringify(values))
     showvalues()
   }
   caixa.value = ''
}

function showvalues(){
    var values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    var lista = document.getElementById('lista-')
    lista.innerHTML = ''
    for(let i = 0; i< values.length; i++){
        lista.innerHTML += `<li>${values[i]['name']}<button id ='btn' onclick = 'remove("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
</svg></button></li>`
    }
}

function remove(data){
    var values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    var index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStoragekey, JSON.stringify(values))
    showvalues()
}

showvalues()