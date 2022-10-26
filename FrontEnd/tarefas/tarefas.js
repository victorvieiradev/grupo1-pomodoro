const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#titulo')
const sFuncao = document.querySelector('#descricao')
const sSalario = document.querySelector('#minutos')
const btnSalvar = document.querySelector('#btnSalvar')
const token = localStorage.getItem("token")
var itens
var id

if(token != null){

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
      const payload = {"titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value}
    try{
      const response = await fetch('http://localhost:8080/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Token' : localStorage.getItem("token")
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
    const payload = { "id": id, "titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value, "concluido": item.concluido}
  try{
    const response = await fetch(`http://localhost:8080/tarefas/editar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'token' : localStorage.getItem(token)
      },
      body: JSON.stringify(payload),
    });
   
    const data = await response.json();
    
      itens.push(data)
       deleteItem(item)
      
      setItensBD()
      loadItens()

      modal.classList.remove('active') 
    }catch{
  
    }
}
}

async function deleteItem(id, index)  {
  const response = await fetch(`http://localhost:8080/tarefas/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'token' : localStorage.getItem(token)
    },
    body:{},
  })

    itens.splice(index, 1)
    setItensBD()
    loadItens()
}

async function marcarConcluidoItem(id, index)  {



  try{
    const response = await fetch(`http://localhost:8080/tarefas/concluir/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'token' : localStorage.getItem(token)
      },
      body:{},
    })
    itens.splice(index, 1)
    setItensBD()
    loadItens()

  } catch{
    
  }
    
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

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
  concluiItemButton.onclick = () => marcarConcluidoItem(item.id);
  const bxConclui = document.createElement('i');
  bxConclui.className = 'fa-regular fa-circle-check';
  concluiItemButton.appendChild(bxConclui)
  acaoConclui.appendChild(concluiItemButton)

  // BOTAO DELETAR TAREFA
  const acaoDelete = document.createElement('td');
  const deleteItemButton = document.createElement('button');
  deleteItemButton.onclick = () => deleteItem(item.id);
  const bxDelete = document.createElement('i');
  bxDelete.className = 'fa-solid fa-trash';
  deleteItemButton.appendChild(bxDelete)
  acaoDelete.appendChild(deleteItemButton)

  // BOTAO INICIAR TIMER
  const acaoStart = document.createElement('td');
  const startItemButton = document.createElement('button');
  startItemButton.setAttribute('id = "start"')
  const bxStart = document.createElement('i');
  bxStart.className = 'fa-solid fa-play' ;
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

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
} else
window.location.href = "../login.html";