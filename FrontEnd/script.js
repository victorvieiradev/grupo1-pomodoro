const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#titulo')
const sFuncao = document.querySelector('#descricao')
const sSalario = document.querySelector('#minutos')
const btnSalvar = document.querySelector('#btnSalvar')

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
      const payload = {"titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value}
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

// function iniciarTimer(minutos){
  
// }

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
  // startItemButton.setAttribute("id", "start")
 // startItemButton.setAttribute("d", "M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z")
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
