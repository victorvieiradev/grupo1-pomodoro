

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const tbodyC = document.querySelector('#tarefasConcluidas')
const sNome = document.querySelector('#titulo')
const sFuncao = document.querySelector('#descricao')
const sSalario = document.querySelector('#minutos')
const btnSalvar = document.querySelector('#btnSalvar')

var itensConc 
var itens
var id 

function openModal(item) {
  modal.classList.add('active')


  if (item) {
    sNome.value = item.titulo
    sFuncao.value = item.descricao
    sSalario.value = item.minutos
    id = item.id 
     modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }

  btnSalvar.onclick  = async e => {
      e.preventDefault();
      
      
      if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
        return
      }
      const payload = {"titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value, "usuario": {"cpf": localStorage.getItem("userCpf")}}
    try{
      const response = await fetch('http://localhost:8080/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(payload),
      });
     
      
      const data = await response.json();
    
          itens.push(data)
        
      
        setItensBD()
      
        modal.classList.remove('active')
        loadItens()
      
      }catch{
    
      }

}
}

function openModalEdit(item) {


  modal.classList.add('active')
  
  if (item) {


    sNome.value = item.titulo
    sFuncao.value = item.descricao
    sSalario.value = item.minutos
    statusI = item.concluido
    id = item.id 
    
     modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }

  btnSalvar.onclick  = async e => {
    
    e.preventDefault();
    
    console.log(itens)
    if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
      return
    }
    const payload = { "id": id, "titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value, "concluido": statusI}
    
    try{
    const response = await fetch(`http://localhost:8080/tarefas/editar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(payload),
    });
   
    const data = await response.json();

    const findItem = itens.findIndex(item => item.id === data.id);
    

    console.log(itens[findItem]);
    itens[findItem] = data;
    console.log(itens)
    
    setItensBD()
    loadItens()
    modal.classList.remove('active') 
   }catch{
  
    }
    
  
  }}

async function deleteItem(id, index)  {
  

  const response = await fetch(`http://localhost:8080/tarefas/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'      
    },
    body:{},
  });

  itens.splice(index, 1)
    setItensBD()
    loadItens()
    
}

async function marcarConcluidoItem(id, index)  {



  try{
    //const response =
     await fetch(`http://localhost:8080/tarefas/concluir/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
       
      },

    }).then( (response) => {
      return response.json()
    }).then(data => {

      itensConc.push(data)

}
) 


    itens.splice(index, 1)
    setItensConc()
    setItensBD()
    loadItens()
    loadItensConcluidos()
    
    

  } catch{
    
  }
    
}

function loadItens() {
  itensConc = getItensConc()
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

function loadItensConcluidos() {
  itensConc = getItensConc()
  itens = getItensBD()
  tbodyC.innerHTML = ''
  itensConc.forEach((item, index) => {
    insertItemConcluido(item, index)
  })

}

function insertItemConcluido(item, index) {
  let trc = document.createElement('tr')

  // ADICIONAR ITEM
  const tituloTD = document.createElement('td');
  tituloTD.innerText = item.titulo
  const descricaoTD = document.createElement('td');
  descricaoTD.innerText = item.descricao



  trc.appendChild(tituloTD)
  trc.appendChild(descricaoTD)



  tbody.appendChild(trc)
}


function insertItem(item, index) {
  let tr = document.createElement('tr')

  // ADICIONAR ITEM
  const tituloTD = document.createElement('td');
  tituloTD.innerText = item.titulo
  const descricaoTD = document.createElement('td');
  descricaoTD.innerText = item.descricao
  const minutosTD = document.createElement('td');
  minutosTD.innerText = item.minutos

  // BOTAO EDITAR ITEM
  const acaoTD = document.createElement('td');
  const editItemButton = document.createElement('button');
  editItemButton.onclick = () => openModalEdit(item);
  const bxEdit = document.createElement('i');
  bxEdit.className = 'fa-solid fa-pen';
  editItemButton.appendChild(bxEdit)
  acaoTD.appendChild(editItemButton)

  // BOTAO CONCLUIR TAREFA
  const acaoConclui = document.createElement('td');
  const concluiItemButton = document.createElement('button');
  concluiItemButton.onclick = () => marcarConcluidoItem(item.id, item);
  const bxConclui = document.createElement('i');
  bxConclui.className = 'fa-regular fa-circle-check';
  concluiItemButton.appendChild(bxConclui)
  acaoConclui.appendChild(concluiItemButton)

  // BOTAO DELETAR TAREFA
  const acaoDelete = document.createElement('td');
  const deleteItemButton = document.createElement('button');
  deleteItemButton.setAttribute('id', 'deletar')
  deleteItemButton.onclick = () => deleteItem(item.id);
  const bxDelete = document.createElement('i');
  bxDelete.className = 'fa-solid fa-trash';
  deleteItemButton.appendChild(bxDelete)
  acaoDelete.appendChild(deleteItemButton)

  // BOTAO INICIAR TIMER
  const acaoStart = document.createElement('td');
  const startItemButton = document.createElement('button');
  const bxStart = document.createElement('i');
  bxStart.className = 'fa-solid fa-play' ;
  bxStart.onclick = () => startTimer(item.minutos, item.titulo)
  // localStorage.push(item.id, item.minutos)
  startItemButton.appendChild(bxStart)
  acaoStart.appendChild(startItemButton)

  tr.appendChild(tituloTD)
  tr.appendChild(descricaoTD)
  tr.appendChild(minutosTD)
  tr.appendChild(acaoTD)
  tr.appendChild(acaoConclui)
  tr.appendChild(acaoDelete)
  tr.appendChild(acaoStart)

  tbody.appendChild(tr)
}



//FAZER FUNÇÃO GET COM DATABASE PARA MOSTRAR NA TELA
async function getItensDB(){

 let payload = localStorage.getItem("userCpf")

  const response = await fetch(`http://localhost:8080/tarefas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      }
    });
   
    const data = await response.json();
    const data2 = data.filter((item) => ((item?.usuario?.cpf === payload)&&(item?.concluido === false))); 
    const dataC = data.filter((item) => ((item?.usuario?.cpf === payload)&&(item?.concluido === false))); 
    localStorage.setItem('dbfunc', JSON.stringify(data2))
    

}

async function getItensConcluidosDB(){

  let payload = true
 
   const response = await fetch(`http://localhost:8080/tarefas`, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
         
       }
     });
    
     const data = await response.json();
     const data2 = data.filter((item) => item?.concluido === payload); 
 
     localStorage.setItem('concluidas', JSON.stringify(data2))
     
 
 }
 

const getItensConc = () => JSON.parse( localStorage.getItem('concluidas')) ?? []
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))
const setItensConc = () => localStorage.setItem('concluidas', JSON.stringify(itensConc))

getItensDB()
getItensConcluidosDB()
loadItens()
getItensBD()
getItensConc()
loadItensConcluidos()


function startTimer(minutos, titulo){
  localStorage.setItem('tempo', JSON.stringify(minutos))
  localStorage.setItem('TituloTarefa', JSON.stringify(titulo))
  window.location.href = "timerU/timer.html";
  
 }
 

