const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#titulo')
const sFuncao = document.querySelector('#descricao')
const sSalario = document.querySelector('#minutos')
const btnSalvar = document.querySelector('#btnSalvar')

var itens
var id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = item[itens.id].titulo
    sFuncao.value = item[itens.id].descricao
    sSalario.value = item[itens.id].minutos
    id = item.id
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }
}

function editItem(index) {

  openModal(true, index)

  
}


function deleteItem(index) {
loadItens()

  // console.log(JSON.stringify.index.value)
  try{
    const response =  fetch('http://localhost:8080/tarefas/concluir/' + index.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
 
    
    ;//.then( (response) => response.json().then( (data) => id = data.id))

  } catch{
    
  }
     itens.splice(index, 1)
    setItensBD()
}



function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
  
    <td>${item.titulo}</td>
    <td>${item.descricao}</td>
    <td>${item.minutos}</td>
    <td class="acao">
      <button onclick="editItem(${item.id})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${item.id})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = async e => {
  e.preventDefault();
  
  if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
    return
  }
  let data = {"titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value}
try{
  const response = await fetch('http://localhost:8080/tarefas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });//.then( (response) => response.json().then( (data) => id = data.id))
 
  
  const data1 = await response.json();

  console.log("id do objeto salvo: ",data1.id)
  let id = data1.id.value

    if (id !== undefined) {
      itens[id].titulo = sNome.value
      itens[id].descricao = sFuncao.value
      itens[id].minutos = sSalario.value
      itens[id].id = id
    } else {
      itens.push({'titulo': sNome.value, 'descricao': sFuncao.value, 'minutos': sSalario.value})
    }
  
    setItensBD()
  
    modal.classList.remove('active')
    loadItens()
    id = undefined
  }catch{

  }
}




function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
